import {
  Component,
  OnInit,
  Input,
  ElementRef,
  AfterViewInit,
  EventEmitter,
  Output
} from '@angular/core';
import * as _ from 'lodash';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {
  onFormReady,
  onDataValueChange
} from '../../helpers/data-entry.helper';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit, AfterViewInit {
  @Input()
  presetValuesSections;
  @Input()
  presetValueFormDesign;
  @Input()
  presetValuesDataValues;

  @Input() isDataEntryLevel;

  @Input()
  entryFormType: string;

  @Output()
  dataValueUpdate: EventEmitter<any> = new EventEmitter<any>();

  _htmlMarkup: SafeHtml;
  hasScriptSet: boolean;
  entryFormStatusColors: any;
  constructor(private sanitizer: DomSanitizer, private elementRef: ElementRef) {
    this.entryFormStatusColors = {
      OK: '#b9ffb9',
      WAIT: '#fffe8c',
      ERROR: '#ff8a8a',
      ACTIVE: '#488aff',
      NORMAL: '#ccc'
    };

    this.entryFormType = 'aggregate';

    document.body.addEventListener(
      'dataValueUpdate',
      (e: CustomEvent) => {
        e.stopPropagation();
        const dataValueObject = e.detail;
        if (dataValueObject) {
          this.dataValueUpdate.emit(dataValueObject);
        }
      },
      false
    );
  }

  ngOnInit() {
    try {
      this._htmlMarkup = this.sanitizer.bypassSecurityTrustHtml(
        this.presetValueFormDesign
      );
    } catch (e) {
      console.log(JSON.stringify(e));
    }
  }

  ngAfterViewInit() {
    this.setScriptsOnHtmlContent(
      this.getScriptsContents(this.presetValueFormDesign)
    );
  }

  getScriptsContents(html) {
    const matchedScriptArray = html.match(
      /<script[^>]*>([\w|\W]*)<\/script>/im
    );
    const scripts =
      matchedScriptArray && matchedScriptArray.length > 0
        ? matchedScriptArray[0]
            .replace(/(<([^>]+)>)/gi, ':separator:')
            .split(':separator:')
            .filter(content => content.length > 0)
        : [];

    return _.filter(scripts, (scriptContent: string) => scriptContent !== '');
  }

  setScriptsOnHtmlContent(scriptsContentsArray) {
    const dataElements = _.flatten(
      _.map(
        this.presetValuesSections,
        (presetValuesSection: any) => presetValuesSection.dataElements
      )
    );

    if (!this.hasScriptSet) {
      onFormReady(
        this.entryFormType,
        dataElements,
        this.presetValuesDataValues,
        this.entryFormStatusColors,
        this.isDataEntryLevel,
        scriptsContentsArray,
        function(entryFormType, entryFormStatusColors, isDataEntryLevel) {
          // Listen for change event
          document.addEventListener(
            'change',
            function(event: any) {
              // If the clicked element doesn't have the right selector, bail
              if (
                event.target.matches(
                  '.entryfield, .entryselect, .entrytrueonly, .entryfileresource'
                )
              ) {
                onDataValueChange(
                  event.target,
                  entryFormType,
                  entryFormStatusColors
                );
              }
              event.preventDefault();
            },
            false
          );

          // Embed inline javascripts
          const scriptsContents = `
          try {${scriptsContentsArray.join('')}} catch(e) { console.log(e);}`;
          const script = document.createElement('script');
          script.type = 'text/javascript';
          script.innerHTML = scriptsContents;
          document.getElementById('_custom_entry_form').appendChild(script);
        }
      );
    }
  }
}

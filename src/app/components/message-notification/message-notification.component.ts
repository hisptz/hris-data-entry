import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-notification',
  templateUrl: './message-notification.component.html',
  styleUrls: ['./message-notification.component.scss']
})
export class MessageNotificationComponent implements OnInit {
  @Input() message: string;
  constructor() {}

  ngOnInit() {}
}

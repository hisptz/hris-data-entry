import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HrisMenuModule } from '@iapps/hris-menu';
import { NgxDhis2HttpClientModule } from '@iapps/ngx-dhis2-http-client';
import { NgxDhis2OrgUnitFilterModule } from '@iapps/ngx-dhis2-org-unit-filter';
import { EffectsModule } from '@ngrx/effects';
import {
  RouterStateSerializer,
  StoreRouterConnectingModule
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { RoutingModule } from './app.routes';
import { components } from './components';
import { MaterialModule } from './material/material.module';
import { containers } from './containers';
import { effects } from './store/store.effects';
import { metaReducers, reducers } from './store/store.reducer';
import { RouteSerializer } from './utils';
import { pipes } from './pipes';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, ...components, ...containers, ...pipes],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    NgxDhis2HttpClientModule.forRoot({
      version: 1,
      namespace: 'hris',
      models: {}
    }),
    /**
     * Menu  module
     */
    HrisMenuModule,

    /**
     * Translation module
     */
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    NgxDhis2OrgUnitFilterModule,

    /**
     * @ngrx/router-store keeps router state up-to-date in the store
     */
    StoreRouterConnectingModule.forRoot(),

    !environment.production ? StoreDevtoolsModule.instrument() : [],

    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [{ provide: RouterStateSerializer, useClass: RouteSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgxPlanetModule } from 'ngx-planet';
import { routers } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ComponentOneComponent } from './component-one/component-one.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routers, { relativeLinkResolution: 'legacy' }),
    NgxPlanetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

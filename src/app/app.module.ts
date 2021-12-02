import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularYandexMapsModule, YaConfig } from 'angular8-yandex-maps';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


const mapConfig: YaConfig = {
  apikey: '23215eb4-11da-4e8e-b8d2-4e3bb79ec298',
  lang: 'ru_RU',
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularYandexMapsModule.forRoot(mapConfig),
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndiaComponent } from './india/india.component';
import { UsaComponent } from './usa/usa.component';
import { DelhiComponent } from './delhi/delhi.component';
import { MumbaiComponent } from './mumbai/mumbai.component';
import { NewyorkComponent } from './newyork/newyork.component';
import { WashingtonComponent } from './washington/washington.component';

@NgModule({
  declarations: [
    AppComponent,
    IndiaComponent,
    UsaComponent,
    DelhiComponent,
    MumbaiComponent,
    NewyorkComponent,
    WashingtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

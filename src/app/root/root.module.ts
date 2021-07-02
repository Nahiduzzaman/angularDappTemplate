import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootDefaultComponent } from './components/root-default/root-default.component';

import { RootRoutingModule } from './root-routing.module';

@NgModule({
  declarations: [
    RootDefaultComponent
  ],
  imports: [
    BrowserModule,
    RootRoutingModule
  ],
  providers: [],
  bootstrap: [RootDefaultComponent]
})
export class RootModule { }

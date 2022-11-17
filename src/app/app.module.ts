import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {routing} from './app.route';
import {FormsModule} from "@angular/forms";
import {InputsComponent} from "./inputs.component";
import {RedblackgreenDirective} from './redblackgreen.directive';
import {RoundingPipe} from "./rounding.pipe";
import { AppService } from './app.component.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, InputsComponent, RedblackgreenDirective, RoundingPipe
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})

export class AppModule {
}

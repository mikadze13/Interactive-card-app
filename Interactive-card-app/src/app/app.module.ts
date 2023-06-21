import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardDecorationComponent } from './components/card-decoration/card-decoration.component';
import { CardFormComponent } from './components/card-form/card-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CardDecorationComponent,
    CardFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

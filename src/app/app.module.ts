import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


import { RECAPTCHA_SETTINGS,RecaptchaFormsModule, RecaptchaLoaderService, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import {HttpClientModule} from '@angular/common/http'


const globalSettings: RecaptchaSettings = { siteKey: '6LeHd7oZAAAAAHePgAP_y77ZkhQdC4axyL6JbYSw' };

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ContactComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,MatInputModule,MatButtonModule,MatFormFieldModule,
    RecaptchaModule,RecaptchaFormsModule,
    HttpClientModule,
    MatCardModule,
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: globalSettings, 
    }
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }

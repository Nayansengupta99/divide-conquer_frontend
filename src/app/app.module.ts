import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { SaveUserItemsComponent } from './save-user-items/save-user-items.component';
import { AppServiceService } from './app-service.service';
import {HttpClientModule } from '@angular/common/http';
import { ShowSharesComponent } from './show-shares/show-shares.component'
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    SaveUserItemsComponent,
    ShowSharesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './navbar/navbar.component';

import { SideNavComponent } from './side-nav/side-nav.component';

import { MessageBoxComponent } from './message-box/message-box.component';
import { MessageContainerComponent } from './message-container/message-container.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideNavComponent,
    MessageBoxComponent,
    MessageContainerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

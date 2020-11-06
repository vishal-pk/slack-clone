import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from   '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

import { NavbarComponent } from './navbar/navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChatHeaderComponent } from './chat-header/chat-header.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { FirstListComponent } from './first-list/first-list.component';
import { MatIconModule } from "@angular/material/icon";

import { HttpClientModule } from '@angular/common/http';
import { MenuListComponent } from './side-nav/menu-list/menu-list.component';



@NgModule({
  declarations: [
    AppComponent,

    MessageComponent,

    NavbarComponent,
    ChatHeaderComponent,
    SideNavComponent,
    FirstListComponent,
    MenuListComponent,
    NavbarComponent,
    SideNavComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PickerModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

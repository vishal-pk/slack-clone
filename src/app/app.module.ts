import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from   '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MessageComponent } from './message/message.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

import { NavbarComponent } from './navbar/navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';

import { ChatHeaderComponent } from './chat-header/chat-header.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { FirstListComponent } from './first-list/first-list.component';
import { MatIconModule } from "@angular/material/icon";

import { HttpClientModule } from '@angular/common/http';
import { MenuListComponent } from './side-nav/menu-list/menu-list.component';
import { MessageContainerComponent } from './message-container/message-container.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagePassingService } from './service/message-passing.service';



@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    MessageComponent,
    NavbarComponent,
    ChatHeaderComponent,
    FirstListComponent,
    MenuListComponent,
    NavbarComponent,
    SideNavComponent,
    MessageContainerComponent,
    MessageBoxComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PickerModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    ScrollingModule,
    BrowserAnimationsModule

  ],
  providers: [
    MessagePassingService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { WebRTCSharedModule } from './webrtc-chat/shared/webrtc-shared.module';
import { WebRTCChatModule } from './webrtc-chat/webrtc-chat.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GumComponent } from './gum/gum.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, GumComponent],
  imports: [BrowserModule, AppRoutingModule, NoopAnimationsModule, WebRTCChatModule, WebRTCSharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

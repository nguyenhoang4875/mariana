import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared';
import { WebRTCChatComponent } from './webrtc-chat.component';

@NgModule({
  declarations: [WebRTCChatComponent],
  imports: [CommonModule],
  exports: [WebRTCChatComponent],
})
export class WebRTCChatModule {}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-gum',
  templateUrl: './gum.component.html',
  styleUrls: ['./gum.component.scss'],
})
export class GumComponent implements OnInit {
  constructor() {}
  video: any;
  @ViewChild('videoElement', { static: true }) videoElement: ElementRef;

  isPlaying = false;

  displayControls = true;

  stream: any;

  ngOnInit() {
    this.video = this.videoElement.nativeElement;
  }

  start() {
    this.initCamera({ video: true, audio: false });
  }

  pause() {
    this.video.pause();
  }

  toggleControls() {
    this.video.controls = this.displayControls;
    this.displayControls = !this.displayControls;
  }

  resume() {
    this.video.play();
  }

  sound() {
    this.initCamera({ video: true, audio: true });
  }
  stop() {
    this.stream.getTracks().forEach((element) => {
      element.stop();
    });
  }

  initCamera(config: any) {
    var browser = <any>navigator;

    browser.getUserMedia =
      browser.getUserMedia ||
      browser.webkitGetUserMedia ||
      browser.mozGetUserMedia ||
      browser.msGetUserMedia;

    browser.mediaDevices.getUserMedia(config).then((stream) => {
      this.stream = stream;
      this.video.srcObject = stream;
      this.video.play();
    });
  }
}

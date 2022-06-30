import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subscribe-button',
  templateUrl: './subscribe-button.component.html',
  styleUrls: ['./subscribe-button.component.scss']
})

export class SubscribeButtonComponent {
  @Output() enableSwitchChange = new EventEmitter<boolean>();
  @Input() enableSwitch: Boolean = false;

  update() {
    this.enableSwitchChange.emit(Boolean(this.enableSwitch.toString()));
  }
}

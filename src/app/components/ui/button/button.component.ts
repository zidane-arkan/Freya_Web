import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  @Input() text?: string = 'Nama';
  @Input() svgElement?: any;
  @Output() onToggleHandler = new EventEmitter();
  onClick() {
    this.onToggleHandler.emit();
  }
}

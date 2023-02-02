import { Component, Input, OnInit } from '@angular/core';
import { AboutList } from 'src/app/AboutList';

@Component({
  selector: 'app-aboutlist',
  templateUrl: './aboutlist.component.html',
  styleUrls: ['./aboutlist.component.css'],
})
export class AboutlistComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  // @Input() listData
  @Input() aboutList?: AboutList;
  // @Input() spanText?: string;
  // @Input() headingText?: string;
  // @Input() parafText?: string;
  // @Input() btnText?: string;
  // @Input() imgLink?: string;
}

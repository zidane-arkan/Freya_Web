import { Component, Input } from '@angular/core';
import { dummyAboutList } from 'src/app/DUMMY_ABOUTLIST';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  @Input() dummyList = dummyAboutList;
}

import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({
      offset: 100,
      anchorPlacement: 'bottom-top',
      mirror: true
    });
  }
  constructor() {}
}

import { Component, Input, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  @Input() isShow: boolean = false;
  ngOnInit(): void {
    AOS.init();
  }

  toggleNavbar() {
    console.log(2);
    return (this.isShow = !this.isShow);
  }
}

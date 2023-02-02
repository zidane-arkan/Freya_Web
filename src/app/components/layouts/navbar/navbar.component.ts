import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  @Input() isShow: boolean = false;
  ngOnInit(): void {}

  toggleNavbar() {
    console.log(2);
    return (this.isShow = !this.isShow);
  }
}

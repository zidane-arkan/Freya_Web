import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.css'],
})
export class CtaComponent implements OnInit {
  ngOnInit(): void {
    AOS.init();
  }
}

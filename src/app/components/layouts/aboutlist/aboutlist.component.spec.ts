import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutlistComponent } from './aboutlist.component';

describe('AboutlistComponent', () => {
  let component: AboutlistComponent;
  let fixture: ComponentFixture<AboutlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

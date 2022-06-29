import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtletasComponent } from './atletas.component';

describe('AtletasComponent', () => {
  let component: AtletasComponent;
  let fixture: ComponentFixture<AtletasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtletasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

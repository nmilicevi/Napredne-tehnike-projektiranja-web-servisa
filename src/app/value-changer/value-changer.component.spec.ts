import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueChangerComponent } from './value-changer.component';

describe('ValueChangerComponent', () => {
  let component: ValueChangerComponent;
  let fixture: ComponentFixture<ValueChangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueChangerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

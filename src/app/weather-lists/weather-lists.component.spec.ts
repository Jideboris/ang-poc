import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherListsComponent } from './weather-lists.component';

describe('WeatherListsComponent', () => {
  let component: WeatherListsComponent;
  let fixture: ComponentFixture<WeatherListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogotipoComponent } from './logotipo.component';

describe('LogotipoComponent', () => {
  let component: LogotipoComponent;
  let fixture: ComponentFixture<LogotipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogotipoComponent]
    });
    fixture = TestBed.createComponent(LogotipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

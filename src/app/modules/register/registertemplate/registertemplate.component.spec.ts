import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistertemplateComponent } from './registertemplate.component';

describe('RegistertemplateComponent', () => {
  let component: RegistertemplateComponent;
  let fixture: ComponentFixture<RegistertemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistertemplateComponent]
    });
    fixture = TestBed.createComponent(RegistertemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

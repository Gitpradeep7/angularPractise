import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngtemplateComponent } from './angtemplate.component';

describe('AngtemplateComponent', () => {
  let component: AngtemplateComponent;
  let fixture: ComponentFixture<AngtemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngtemplateComponent]
    });
    fixture = TestBed.createComponent(AngtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

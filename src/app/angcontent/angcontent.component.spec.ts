import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngcontentComponent } from './angcontent.component';

describe('AngcontentComponent', () => {
  let component: AngcontentComponent;
  let fixture: ComponentFixture<AngcontentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngcontentComponent]
    });
    fixture = TestBed.createComponent(AngcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

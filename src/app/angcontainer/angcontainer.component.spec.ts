import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngcontainerComponent } from './angcontainer.component';

describe('AngcontainerComponent', () => {
  let component: AngcontainerComponent;
  let fixture: ComponentFixture<AngcontainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngcontainerComponent]
    });
    fixture = TestBed.createComponent(AngcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

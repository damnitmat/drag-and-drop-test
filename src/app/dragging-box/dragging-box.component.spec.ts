import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggingBoxComponent } from './dragging-box.component';

describe('DraggingBoxComponent', () => {
  let component: DraggingBoxComponent;
  let fixture: ComponentFixture<DraggingBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraggingBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

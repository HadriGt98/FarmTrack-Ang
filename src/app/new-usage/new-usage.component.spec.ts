import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUsageComponent } from './new-usage.component';

describe('NewUsageComponent', () => {
  let component: NewUsageComponent;
  let fixture: ComponentFixture<NewUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUsageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

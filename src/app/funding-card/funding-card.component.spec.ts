import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingCardComponent } from './funding-card.component';

describe('FundingCardComponent', () => {
  let component: FundingCardComponent;
  let fixture: ComponentFixture<FundingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

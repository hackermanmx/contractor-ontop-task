import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileContractorListComponent } from './mobile-contractor-list.component';

describe('MobileCardComponent', () => {
  let component: MobileContractorListComponent;
  let fixture: ComponentFixture<MobileContractorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobileContractorListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileContractorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

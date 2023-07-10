import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSharesComponent } from './show-shares.component';

describe('ShowSharesComponent', () => {
  let component: ShowSharesComponent;
  let fixture: ComponentFixture<ShowSharesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSharesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

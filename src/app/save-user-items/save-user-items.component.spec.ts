import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveUserItemsComponent } from './save-user-items.component';

describe('SaveUserItemsComponent', () => {
  let component: SaveUserItemsComponent;
  let fixture: ComponentFixture<SaveUserItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveUserItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveUserItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

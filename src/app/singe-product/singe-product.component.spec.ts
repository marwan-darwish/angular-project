import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingeProductComponent } from './singe-product.component';

describe('SingeProductComponent', () => {
  let component: SingeProductComponent;
  let fixture: ComponentFixture<SingeProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingeProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

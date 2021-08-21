import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KisilerComponent } from './kisiler.component';

describe('KisilerComponent', () => {
  let component: KisilerComponent;
  let fixture: ComponentFixture<KisilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KisilerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KisilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

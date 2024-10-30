import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransazioneSingolaComponent } from './transazione-singola.component';

describe('TransazioneSingolaComponent', () => {
  let component: TransazioneSingolaComponent;
  let fixture: ComponentFixture<TransazioneSingolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransazioneSingolaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransazioneSingolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

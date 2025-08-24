import { TestBed } from '@angular/core/testing';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { DashboardComponent } from './dashboard.component';
import { reducers } from '../store';
import { DashboardEffects } from '../store/dashboard.effects';

describe('DashboardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideStore(reducers), provideEffects([DashboardEffects])]
    }).compileComponents();
  });

  it('should create', async () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
});

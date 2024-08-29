import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompletedComponent } from './components/completed/completed.component';
import { DiscardedComponent } from './components/discarded/discarded.component';
import { AllComponent } from './components/all/all.component';

export const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'all', component: AllComponent },
  { path: 'completed', component: CompletedComponent },
  { path: 'discarded', component: DiscardedComponent },
];

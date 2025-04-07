import { Routes } from '@angular/router';
import { CompletedComponent } from './components/completed/completed.component';
import { DiscardedComponent } from './components/discarded/discarded.component';
import { AllComponent } from './components/all/all.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'all', component: AllComponent },
  { path: 'completed', component: CompletedComponent },
  { path: 'discarded', component: DiscardedComponent },
  { path: 'login', component: LoginComponent },
];

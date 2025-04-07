import { Routes } from '@angular/router';
import { CompletedComponent } from './components/completed/completed.component';
import { DiscardedComponent } from './components/discarded/discarded.component';
import { AllComponent } from './components/all/all.component';
import { LoginComponent } from './components/login/login.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'all', component: AllComponent },
  { path: 'completed', component: CompletedComponent },
  { path: 'discarded', component: DiscardedComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'edit-user/:userId', component: EditUserComponent },
];

import { Routes } from '@angular/router';
import { Journal } from './components/journal/journal';
import { Home } from './components/home/home';
import { Signup } from './components/signup/signup';
import { Login } from './components/login/login';

export const routes: Routes = [
  { path: '', component: Home },       // Αρχική σελίδα
  { path: 'journal', component: Journal },
  {path: 'signup', component:Signup}, // Σελίδα ημερολογίου
  {path: 'login', component: Login}, // Σελίδα σύνδεσης  
];

import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateCertificatePageComponent } from './components/create-certificate-page/create-certificate-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-certificate-page', component: CreateCertificatePageComponent }
];

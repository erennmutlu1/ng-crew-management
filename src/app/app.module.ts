import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { routes } from './app.routes';
import { MatTableModule } from '@angular/material/table';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrewMemberListComponent } from './components/crew-member-list/crew-member-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CrewCertificateComponent } from './components/modals/crew-certificate/crew-certificate.component';
import { EditCrewMemberComponent } from './components/modals/actions/edit-crew-member/edit-crew-member.component';
import { AddCrewMemberComponent } from './components/modals/actions/add-crew-member/add-crew-member.component';
import { CreateCertificatePageComponent } from './components/create-certificate-page/create-certificate-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrewCardPageComponent } from './components/modals/actions/crew-card-page/crew-card-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrewMemberListComponent,
    CrewCertificateComponent,
    EditCrewMemberComponent,
    AddCrewMemberComponent,
    CreateCertificatePageComponent,
    CrewCardPageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatSnackBarModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

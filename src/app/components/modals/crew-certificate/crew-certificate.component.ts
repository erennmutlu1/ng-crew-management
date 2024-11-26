import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-crew-certificate',
  templateUrl: './crew-certificate.component.html',
  styleUrl: './crew-certificate.component.css'
})
export class CrewCertificateComponent {
  displayedColumns: string[] = ['certificateType', 'issueDate', 'expiryDate'];

  constructor(@Inject(MAT_DIALOG_DATA) public certificateData: any) {
    console.log('data',certificateData); //logging data for certificates
   }
}

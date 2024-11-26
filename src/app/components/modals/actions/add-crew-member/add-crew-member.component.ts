import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CertificateService } from '../../../../services/certificate.service';
import { CrewMember } from '../../../../models/crew-member.model';

@Component({
  selector: 'app-add-crew-member',
  templateUrl: './add-crew-member.component.html',
  styleUrls: ['./add-crew-member.component.css'],
})
export class AddCrewMemberComponent implements OnInit {
  addCrewForm: FormGroup; // Form group for the crew member
  nationalities: string[] = []; // Dropdown options for nationalities
  titles: string[] = []; // Dropdown options for titles
  certificateTypes: any[] = []; // Dropdown options for certificate types

  constructor(
    public dialogRef: MatDialogRef<AddCrewMemberComponent>, // For closing the dialog
    private certificateService: CertificateService // Service for fetching certificate types
  ) {
    // Initialize the form group
    this.addCrewForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      nationality: new FormControl('', Validators.required),
      currency: new FormControl('', Validators.required),
      dailyRate: new FormControl('', [Validators.required, Validators.min(0)]),
      daysOnBoard: new FormControl('', [Validators.required, Validators.min(1)]),
      certificates: new FormArray([]), // Start with no certificates
    });
  }

  ngOnInit(): void {
    // Load options for nationalities and titles
    this.nationalities = this.getNationalities();
    this.titles = this.getTitles();

    // Load certificate types from the service
    this.certificateService.getCertificateList().subscribe({
      next: (data) => {
        this.certificateTypes = data; // Assign data to certificate types
      },
      error: (error) => {
        console.error('Error fetching certificate types:', error);
      },
    });
  }

  // Dropdown values for nationalities
  getNationalities(): string[] {
    return ['Russian', 'Ukranian', 'German', 'French', 'Argentinian', 'Dutch', 'Norwegian', 'Swedish', 'Turkish', 'Spainish', 'British', 'Polish'];
  }

  // Dropdown values for titles
  getTitles(): string[] {
    return ['Captain', 'First Officer', 'Second Officer', 'Cooker','Mechanicer', 'Radio Operator', 'Software Developer'];
  }

  // Access the certificates form array
  get certificates(): FormArray {
    return this.addCrewForm.get('certificates') as FormArray;
  }

  // Add a blank certificate entry
  addCertificate(): void {
    this.certificates.push(
      new FormGroup({
        type: new FormControl('', Validators.required),
        issueDate: new FormControl('', Validators.required),
        expiryDate: new FormControl('', Validators.required),
      })
    );
  }

  // Cancel the dialog without saving
  onCancel(): void {
    this.dialogRef.close();
  }

  // Save the form data and close the dialog
  onSave(): void {
    if (this.addCrewForm.valid) {
      const newCrewMember: CrewMember = this.addCrewForm.value;
      this.dialogRef.close(newCrewMember); // Pass the new crew member back to the parent
    }
  }
}

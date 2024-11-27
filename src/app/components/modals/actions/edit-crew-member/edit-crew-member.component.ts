import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CertificateService } from '../../../../services/certificate.service';
import { CrewMember } from '../../../../models/crew-member.model';

@Component({
  selector: 'app-edit-crew-member',
  templateUrl: './edit-crew-member.component.html',
  styleUrls: ['./edit-crew-member.component.css'],
})
export class EditCrewMemberComponent implements OnInit {
  editCrewForm: FormGroup = new FormGroup({});

  nationalities: string[] = [];
  titles: string[] = [];
  certificateTypes: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<EditCrewMemberComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CrewMember,
    private certificateTypeService: CertificateService
  ){}

  ngOnInit() {

      this.editCrewForm = new FormGroup({
      firstName: new FormControl(this.data.firstName, Validators.required),
      lastName: new FormControl(this.data.lastName, Validators.required),
      title: new FormControl(this.data.title, Validators.required),
      nationality: new FormControl(this.data.nationality, Validators.required),
      currency: new FormControl(this.data.currency, Validators.required),
      dailyRate: new FormControl(this.data.dailyRate, [Validators.required, Validators.min(0)]),
      daysOnBoard: new FormControl(this.data.daysOnBoard, [Validators.required, Validators.min(1)]),
      certificates: new FormArray(this.data.certificates.map(cert => this.createCertificateGroup(cert)))
    });

    this.nationalities = this.getNationalities();
    this.titles = this.getTitles();
    this.certificateTypeService.getCertificateList().subscribe({
      next: (data) => {
        this.certificateTypes = data; // Assign the data to the array
      },
      error: (error) => {
        console.error("Error loading certificates:", error); // Log the error
      },
    });
    console.log("CErtificate:",this.certificateTypes);
  }

  getNationalities(): string[] {
    return ['Russian', 'Ukranian', 'German', 'French', 'Argentinian', 'Dutch', 'Norwegian', 'Swedish', 'Turkish', 'Spanish', 'British', 'Polish'];
  }

  getTitles(): string[] {
    return ['Captain', 'First Officer', 'Second Officer', 'Cooker','Mechanicer', 'Radio Operator', 'Software Developer'];
  }

  get certificatesArray(): FormArray {
    return this.editCrewForm.get('certificates') as FormArray;
  }

  createCertificateGroup(cert: any): FormGroup {
    return new FormGroup({
      type: new FormControl(cert.type, Validators.required),
      issueDate: new FormControl(cert.issueDate, Validators.required),
      expiryDate: new FormControl(cert.expiryDate, Validators.required)
    });
  }


  addCertificate(): void {
    (this.editCrewForm.get('certificates') as FormArray).push(
      this.createCertificateGroup({ type: '', issueDate: '', expiryDate: '' })
    );
  }


  removeCertificate(index: number): void {
    (this.editCrewForm.get('certificates') as FormArray).removeAt(index);
  }

  get certificates() {
    return this.editCrewForm.get('certificates') as FormArray;
  }


  onCancel(): void {
    this.dialogRef.close();
  }


  onSave(): void {
    if (this.editCrewForm.valid) {
      this.dialogRef.close(this.editCrewForm.value);
    }
  }
}

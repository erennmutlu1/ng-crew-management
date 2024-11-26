import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CertificateService } from '../../services/certificate.service';
import { CertificateType } from '../../models/certificate-type.model';

@Component({
  selector: 'app-create-certificate-page',
  templateUrl: './create-certificate-page.component.html',
  styleUrl: './create-certificate-page.component.css'
})
export class CreateCertificatePageComponent {
  certificateTypeForm: FormGroup;
  certificateTypeList: CertificateType[] = [];
  displayedColumns: string[] = ['name', 'description'];

  constructor(
    private fb: FormBuilder,
    private certificateService: CertificateService
  ) {
    this.certificateTypeForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.certificateService.getCertificateList().subscribe((data) => (this.certificateTypeList = data));
  }

  onSubmit(): void {
    if (this.certificateTypeForm.valid) {
      // Create a new certificate
      const newCertificate: CertificateType = this.certificateTypeForm.value;
      this.certificateService.addCertificate(newCertificate);

      // Update the certificate list
      this.certificateService.getCertificateList().subscribe((data) => (this.certificateTypeList = data));

      // Reset the certificate form
      this.certificateTypeForm.reset();
    }
  }
}

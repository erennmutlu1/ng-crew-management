import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CertificateType } from '../models/certificate-type.model';

@Injectable({
  providedIn: 'root',
})
export class CertificateService {
  private certificateUrl = '../assets/data/certificates.json';
  private certificateListSubject = new BehaviorSubject<CertificateType[]>([]);

  constructor(private http: HttpClient) {
    // Load the JSON file into memory when the application starts
    this.loadInitialData();
  }

  /**
   * Reads the JSON file and loads it into the BehaviorSubject
   */
  private loadInitialData(): void {
    this.http.get<CertificateType[]>(this.certificateUrl).subscribe({
      next: (certificateList) => {
        this.certificateListSubject.next(certificateList);
      },
      error: (error) => {
        console.error('Error occurred while loading the JSON file:', error);
      },
      complete: () => {
        console.log('Certificate data fetch completed');
      }
    });
  }

  /**
   * Returns the certificate list as an Observable
   */
  getCertificateList(): Observable<CertificateType[]> {
    return this.certificateListSubject.asObservable();
  }

  /**
   * Updates a certificate type and modifies the in-memory list
   */
  editCertificate(data: CertificateType, certificateIndex: number): void {
    const currentList = this.certificateListSubject.getValue();
    const updatedList = currentList.map((certificate, index) =>
      index === certificateIndex ? data : certificate
    );
    this.certificateListSubject.next(updatedList);
  }

  /**
   * Deletes a certificate type
   */
  deleteCertificate(certificateIndex: number): void {
    const currentList = this.certificateListSubject.getValue();
    const updatedList = currentList.filter((_, index) => index !== certificateIndex);
    this.certificateListSubject.next(updatedList);
  }

  /**
   * Adds a new certificate type
   */
  addCertificate(certificate: CertificateType): void {
    const currentList = this.certificateListSubject.getValue();
    const updatedList = [...currentList, certificate];
    this.certificateListSubject.next(updatedList);
  }


}

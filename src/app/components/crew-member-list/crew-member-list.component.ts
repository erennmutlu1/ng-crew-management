import { Component } from '@angular/core';
import { CrewMember } from '../../models/crew-member.model';
import { CrewService } from '../../services/crew.service';
import { MatDialog } from '@angular/material/dialog';
import { CrewCertificateComponent } from '../modals/crew-certificate/crew-certificate.component';

@Component({
  selector: 'app-crew-member-list',
  templateUrl: './crew-member-list.component.html',
  styleUrl: './crew-member-list.component.css'
})
export class CrewMemberListComponent {
  crewMemberList: CrewMember[] = [];
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'nationality',
    'title',
    'daysOnBoard',
    'dailyRate',
    'currency',
    'certificates',
  ];

  constructor(private crewService: CrewService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadCrew();
  }

  loadCrew(): void {
    this.crewService.getCrewMemberList().subscribe((data) => (this.crewMemberList = data));
  }

  showCertificateModal(certificate: any) {
    this.dialog.open(CrewCertificateComponent, {
      width: '600px',
      data: certificate
    })
  }
}

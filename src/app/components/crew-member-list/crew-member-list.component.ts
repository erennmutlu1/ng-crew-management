import { Component } from '@angular/core';
import { CrewMember } from '../../models/crew-member.model';
import { CrewService } from '../../services/crew.service';
import { MatDialog } from '@angular/material/dialog';
import { CrewCertificateComponent } from '../modals/crew-certificate/crew-certificate.component';
import { EditCrewMemberComponent } from '../modals/actions/edit-crew-member/edit-crew-member.component';
import { DeleteCrewMemberComponent } from '../modals/actions/delete-crew-member/delete-crew-member.component';
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
    'actions'
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

  openEditModal(crewMember: CrewMember, crewIndex:number): void {
    const dialogRef = this.dialog.open(EditCrewMemberComponent, {
      width: '600px',
      data: crewMember,
    });

    dialogRef.afterClosed().subscribe(data => {
      console.log('result', data);
      if (data) {
        this.crewService.editCrew(data, crewIndex);
        // Fetch the updated crew list
      this.loadCrew();
      }
    });

  }

  openDeleteModal(crewMember: CrewMember): void {
    this.dialog.open(DeleteCrewMemberComponent, {
      width: '400px',
      data: crewMember,
    });
  }

}

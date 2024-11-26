import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CrewMember } from '../../models/crew-member.model';
import { CrewService } from '../../services/crew.service';
import { CrewCertificateComponent } from '../modals/crew-certificate/crew-certificate.component';
import { EditCrewMemberComponent } from '../modals/actions/edit-crew-member/edit-crew-member.component';

@Component({
  selector: 'app-crew-member-list',
  templateUrl: './crew-member-list.component.html',
  styleUrls: ['./crew-member-list.component.css'],
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
    'actions',
  ];

  constructor(private crewService: CrewService, public dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loadCrew();
  }

  loadCrew(): void {
    this.crewService.getCrewMemberList().subscribe((data) => (this.crewMemberList = data));
  }

  showCertificateModal(certificate: any): void {
    this.dialog.open(CrewCertificateComponent, {
      width: '600px',
      data: certificate,
    });
  }

  openEditModal(crewMember: CrewMember, crewIndex: number): void {
    const dialogRef = this.dialog.open(EditCrewMemberComponent, {
      width: '600px',
      data: crewMember,
    });

    dialogRef.afterClosed().subscribe((data) => {
      console.log('result', data);
      if (data) {
        this.crewService.editCrew(data, crewIndex);
        this.loadCrew();
        this.snackBar.open('Crew member edited successfully!', 'Close', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left',
        });
      }
    });
  }

  deleteCrew(index: number): void {
    this.crewService.deleteCrew(index);
    this.loadCrew();
    this.snackBar.open('Crew member deleted successfully!', 'Close', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'left',
    });
  }
}

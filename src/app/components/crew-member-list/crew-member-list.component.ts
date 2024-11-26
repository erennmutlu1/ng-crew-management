import { Component } from '@angular/core';
import { CrewMember } from '../../models/crew-member.model';
import { CrewService } from '../../services/crew.service';

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

  constructor(private crewService: CrewService) {}

  ngOnInit(): void {
    this.loadCrew();
  }

  loadCrew(): void {
    this.crewService.getCrewMemberList().subscribe((data) => (this.crewMemberList = data));
  }
}

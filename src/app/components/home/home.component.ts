import { Component, OnInit } from '@angular/core';
import { CrewService } from '../../services/crew.service';
import { CrewMember } from '../../models/crew-member.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
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

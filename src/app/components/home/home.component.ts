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

  constructor(private crewService: CrewService) {}

  ngOnInit(): void {
    this.loadCrew();
  }

  loadCrew(): void {
    this.crewService.getCrewMemberList().subscribe(
      (data) => {
        console.log('Fetched Crew Data:', data); // Log fetched data
        this.crewMemberList = data;
      },
      (error) => {
        console.error('Error fetching crew data:', error); // Log any errors
      }
    );
  }

}

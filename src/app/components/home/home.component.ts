import { Component, OnInit } from '@angular/core';
import { CrewService } from '../../services/crew.service';
import { Crew } from '../../models/crew.model';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    MatTableModule
  ]
})
export class HomeComponent implements OnInit {
  crewList: Crew[] = [];

  constructor(private crewService: CrewService) {}

  ngOnInit(): void {
    this.loadCrew();
  }

  loadCrew(): void {
    this.crewService.getCrewList().subscribe((data) => (this.crewList = data));
  }
}

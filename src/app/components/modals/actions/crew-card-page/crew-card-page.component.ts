import { Component } from '@angular/core';
import { CrewMember } from '../../../../models/crew-member.model';
import { CrewService } from '../../../../services/crew.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crew-card-page',
  templateUrl: './crew-card-page.component.html',
  styleUrl: './crew-card-page.component.css'
})
export class CrewCardPageComponent {
  crewData: CrewMember | undefined;
  selectedTab: number = 0;

  constructor(
    private crewService: CrewService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Route parametresinden ID'yi al
    const crewId = Number(this.route.snapshot.paramMap.get('id'));

    // Crew verisini al ve ID'ye göre seç
    this.crewService.getCrewMemberList().subscribe((crewList) => {
      this.crewData = crewList[crewId];
    });
  }
}

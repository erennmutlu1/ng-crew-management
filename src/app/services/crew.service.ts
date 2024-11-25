import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrewMember } from '../models/crew-member.model';

@Injectable({
  providedIn: 'root',
})
export class CrewService {
  private crewUrl = '../assets/data/crew.json';

  constructor(private http: HttpClient) {}

  getCrewMemberList(): Observable<CrewMember[]> {
    console.log("Fetching from",this.crewUrl);
    return this.http.get<CrewMember[]>(this.crewUrl);
  }
}

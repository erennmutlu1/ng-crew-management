import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Crew } from '../models/crew.model';

@Injectable({
  providedIn: 'root',
})
export class CrewService {
  private crewUrl = 'assets/data/crew.json';

  constructor(private http: HttpClient) {}

  getCrewList(): Observable<Crew[]> {
    return this.http.get<Crew[]>(this.crewUrl);
  }
}

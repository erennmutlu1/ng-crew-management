import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CrewMember } from '../models/crew-member.model';

@Injectable({
  providedIn: 'root',
})
export class CrewService {
  private crewUrl = '../assets/data/crew.json';
  private crewListSubject = new BehaviorSubject<CrewMember[]>([]);

  constructor(private http: HttpClient) {
    this.loadInitialData();
  }

  /**
   * Reads the JSON file and loads it into the BehaviorSubject
   */
  private loadInitialData(): void {
    this.http.get<CrewMember[]>(this.crewUrl).subscribe({
      next: (crewList) => {
        this.crewListSubject.next(crewList);
      },
      error: (error) => {
        console.error('Error occurred while loading the JSON file:', error);
      },
      complete: () => {
        console.log('Crew data fetch completed');
      }
    });
  }


  /**
   * Returns the crew list as an Observable
   */
  getCrewMemberList(): Observable<CrewMember[]> {
    return this.crewListSubject.asObservable();
  }

  /**
   * Updates a crew member and modifies the in-memory list
   */
  editCrew(data: CrewMember, crewIndex: number): void {
    const currentList = this.crewListSubject.getValue();
    const updatedList = currentList.map((crew, index) =>
      index === crewIndex ? data : crew
    );
    this.crewListSubject.next(updatedList);
  }

  /**
   * Deletes a crew member
   */
  deleteCrew(crewIndex: number): void {
    const currentList = this.crewListSubject.getValue();
    const updatedList = currentList.filter((_, index) => index !== crewIndex);
    this.crewListSubject.next(updatedList);
  }

  /**
   * Adds a new crew member
   */
  addCrew(crewMember: CrewMember): void {
    const currentList = this.crewListSubject.getValue();
    const updatedList = [...currentList, crewMember];
    this.crewListSubject.next(updatedList);
  }
}

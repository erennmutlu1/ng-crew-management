import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewMemberAddComponent } from './crew-member-add.component';

describe('CrewMemberAddComponent', () => {
  let component: CrewMemberAddComponent;
  let fixture: ComponentFixture<CrewMemberAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrewMemberAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrewMemberAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCrewMemberComponent } from './edit-crew-member.component';

describe('EditCrewMemberComponent', () => {
  let component: EditCrewMemberComponent;
  let fixture: ComponentFixture<EditCrewMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCrewMemberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCrewMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

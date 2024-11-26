import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCrewMemberComponent } from './delete-crew-member.component';

describe('DeleteCrewMemberComponent', () => {
  let component: DeleteCrewMemberComponent;
  let fixture: ComponentFixture<DeleteCrewMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCrewMemberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteCrewMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

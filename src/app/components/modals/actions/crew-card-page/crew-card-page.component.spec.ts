import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewCardPageComponent } from './crew-card-page.component';

describe('CrewCardPageComponent', () => {
  let component: CrewCardPageComponent;
  let fixture: ComponentFixture<CrewCardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrewCardPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrewCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

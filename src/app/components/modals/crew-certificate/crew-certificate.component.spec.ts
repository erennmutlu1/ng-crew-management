import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewCertificateComponent } from './crew-certificate.component';

describe('CrewCertificateComponent', () => {
  let component: CrewCertificateComponent;
  let fixture: ComponentFixture<CrewCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrewCertificateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrewCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

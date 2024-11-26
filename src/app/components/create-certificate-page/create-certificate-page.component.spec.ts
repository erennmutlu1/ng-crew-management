import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCertificatePageComponent } from './create-certificate-page.component';

describe('CreateCertificatePageComponent', () => {
  let component: CreateCertificatePageComponent;
  let fixture: ComponentFixture<CreateCertificatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCertificatePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCertificatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

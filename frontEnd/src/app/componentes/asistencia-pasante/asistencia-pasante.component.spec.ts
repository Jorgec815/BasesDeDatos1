import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenciaPasanteComponent } from './asistencia-pasante.component';

describe('AsistenciaPasanteComponent', () => {
  let component: AsistenciaPasanteComponent;
  let fixture: ComponentFixture<AsistenciaPasanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsistenciaPasanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenciaPasanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

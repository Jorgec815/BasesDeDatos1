import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenciaDocenteComponent } from './asistencia-docente.component';

describe('AsistenciaDocenteComponent', () => {
  let component: AsistenciaDocenteComponent;
  let fixture: ComponentFixture<AsistenciaDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsistenciaDocenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenciaDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

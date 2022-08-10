import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenciaAsistenteComponent } from './asistencia-asistente.component';

describe('AsistenciaAsistenteComponent', () => {
  let component: AsistenciaAsistenteComponent;
  let fixture: ComponentFixture<AsistenciaAsistenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsistenciaAsistenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenciaAsistenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

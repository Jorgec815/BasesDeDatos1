import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPuntajeComponent } from './mostrar-puntaje.component';

describe('MostrarPuntajeComponent', () => {
  let component: MostrarPuntajeComponent;
  let fixture: ComponentFixture<MostrarPuntajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarPuntajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarPuntajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

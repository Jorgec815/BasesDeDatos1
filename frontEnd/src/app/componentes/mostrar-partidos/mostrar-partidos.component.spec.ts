import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPartidosComponent } from './mostrar-partidos.component';

describe('MostrarPartidosComponent', () => {
  let component: MostrarPartidosComponent;
  let fixture: ComponentFixture<MostrarPartidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarPartidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarPartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

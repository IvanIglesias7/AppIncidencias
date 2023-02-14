import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciasComponenteComponent } from './incidencias-componente.component';

describe('IncidenciasComponenteComponent', () => {
  let component: IncidenciasComponenteComponent;
  let fixture: ComponentFixture<IncidenciasComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidenciasComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidenciasComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

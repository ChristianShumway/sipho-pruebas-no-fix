import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirImagenArticuloComponent } from './subir-imagen-articulo.component';

describe('SubirImagenArticuloComponent', () => {
  let component: SubirImagenArticuloComponent;
  let fixture: ComponentFixture<SubirImagenArticuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubirImagenArticuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirImagenArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

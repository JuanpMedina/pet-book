import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component : AppComponent;

  beforeEach(async(() => {
    component = new AppComponent();
  }));

  it('Debe crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Cuando se carga la vista, debe existir la variable con el mismo nombre del proyecto', () => {
    const variable : string = component.title;
    expect(variable).toEqual('pet-book');
  });

  it('Cuando se carga la vista, debe existir un elemento contenedor y un elemento enrutador', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content router-outlet'));
  });

});
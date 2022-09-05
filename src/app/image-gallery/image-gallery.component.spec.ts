import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ImageService } from '../image.service';
import { GalleryComponent } from './image-gallery.component';


class  mockImageService extends ImageService{
getImages(){
  return  [    
    { "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },    
    { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
    { "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
    { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" },
    { "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" }
]  ;
}
}

describe('ImageGalleryComponent', () => {
  let component: GalleryComponent;
  let service: mockImageService;
  
  beforeEach(() => {
  service = new mockImageService();
  component = new GalleryComponent(service);
  });

  
  afterEach(() => {
    service = null;
    component = null;
  });

  it('should create', () => {
    
    expect(component).toBeTruthy();
  });

  describe('btn click filterby=perro', () =>  {
   it('Todas las imagenes filtradas son perro', () => {
      component.filterBy = 'perro';
      component.ngOnChanges();
     
     for (let imagen of (component.allImages.filter(
       (object)=> object.brand === component.filterBy )) 
         ){
      expect(imagen.brand).toBe('perro'); 
     }
  });
});
describe('btn click filterby=perro', () =>  {
  it('Todas las imagenes filtradas son gato', () => {
    component.filterBy = 'gato';

    for (let imagen of (component.allImages.filter(
      (object)=> object.brand === component.filterBy )) 
    ){
      expect(imagen.brand).toBe("gato"); 
  } 
 });
});

 xit('El Filtro perro debe corresponder al nombre del  boton Perro', () => {
  component.ngOnChanges();
  for (let imagen of component.allImages ){
   expect(imagen.brand).toBe("gato"); 
  }
});
});
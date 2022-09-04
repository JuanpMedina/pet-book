import { TestBed } from '@angular/core/testing';

import { ImageService } from './image.service';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    service = new ImageService();
  });

  describe('getImages', () => {
    it('cuando se llame el metodo, debe retornar todas las imagenes(5)', () => {
      let resp = service.getImages();
      expect(resp.length).toEqual(5);
    });
  });

  describe('getImage', () => {
    it('cuando se envie el id 1 que si esta dentro de la lista, debe retornar este elemento', () => {
      const id = 1;
      let resp = service.getImage(id);
      expect(resp.brand).toBe('perro');
      expect(resp.url).toBe('assets/images/perro1.jpg');
    });

    it('cuando se envie el id 3 que si esta dentro de la lista, debe retornar este elemento', () => {
      const id = 3;
      let resp = service.getImage(id);
      expect(resp.brand).toBe('gato');
      expect(resp.url).toBe('assets/images/gato1.jpg');
    });

    it('cuando se envie el id 7 que no esta dentro de la lista, debe retornar undefined', () => {
      const id = 7;
      let resp = service.getImage(id);
      expect(resp).toBeUndefined();      
    });

    it('debe retornar indefinido si se busca una imagen con id que NO existe', () => {
      let imagene = service.getImage(100);
      expect(imagene).toEqual(undefined);
    });

    it('debe retornar indefinido si se busca una imagen con id negativo', () => {
      let imagene1 = service.getImage(-20);
      expect(imagene1).toEqual(undefined);  
    });
    
    it('debe retornar indefinido si se busca una imagen con id decimal', () => {
      let imagene1 = service.getImage(0.048);
      expect(imagene1).toEqual(undefined);  
    });
  });
});
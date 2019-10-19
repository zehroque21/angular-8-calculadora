import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [CalculadoraService]
  }));

  it('should be created', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(1, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
    })
  )

  it('deve garatir que 1 - 4 = -3',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let sub = service.calcular(1, 4, CalculadoraService.SUBTRACAO);
      expect(sub).toEqual(-3);
    })
  )

  it('deve garatir que 1 / 4 = 0.25',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let divisao = service.calcular(1, 4, CalculadoraService.DIVISAO);
      expect(divisao).toEqual(0.25);
    })
  )

  it('deve retornar 0 para operações invalidas',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let result = service.calcular(1, 4, '%');
      expect(result).toEqual(0);
    })
  )
});

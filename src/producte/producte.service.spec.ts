import { Test, TestingModule } from '@nestjs/testing';
import { ProducteService } from './producte.service';

describe('ProducteService', () => {
  let service: ProducteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProducteService],
    }).compile();

    service = module.get<ProducteService>(ProducteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ProducteResolver } from './producte.resolver';

describe('ProducteResolver', () => {
  let resolver: ProducteResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProducteResolver],
    }).compile();

    resolver = module.get<ProducteResolver>(ProducteResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async createProduct(data: Partial<Product>): Promise<Product> {
    const product = this.productRepository.create(data);
    return this.productRepository.save(product);
  }
}

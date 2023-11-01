import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Mutation(() => Product)
  async createProduct(
    @Args('name') name: string,
    @Args('price') price: number,
  ) {
    return this.productService.createProduct({ name, price });
  }
}

import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation(() => User)
  async createUser(
    @Args('name') name: string,
    @Args('email') email: string,
    @Args('age') age: number,
  ) {
    return this.userService.createUser({ name, email, age });
  }

  @Query(() => User)
  async getUser(@Args('id') id: string) {
    return this.userService.getUser(id);
  }
}

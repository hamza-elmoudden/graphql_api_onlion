import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Logininput } from './Type/login.input';
import { SignInResponse } from './Type/SignInResponse.typedef';

@Resolver()
export class AuthResolver {
    constructor(private authService: AuthService) {}
  
  @Mutation(()=>SignInResponse)
   async signIn(@Args("login")signInDto: Logininput) {
      return await this.authService.signIn(signInDto.email, signInDto.password);
  }
}

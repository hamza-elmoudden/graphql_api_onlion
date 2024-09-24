import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private usersService: UserService,
  ) {}

  async signIn(
    email: string,
    pass: string,
  ): Promise<{ accessToken: string }> {
    const user = await this.usersService.FindUserByEmail(email);
    
    if (!user) {
      throw new UnauthorizedException();
    }
    
    const isMatch = await bcrypt.compare(pass, user.password);

    if (!isMatch) {
      throw new UnauthorizedException();
    }

    const payload = { id: user._id, firstname: user.name , email:user.email};
    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }


}

export enum Rol{
  admin = "admin",
  user = "user"
}
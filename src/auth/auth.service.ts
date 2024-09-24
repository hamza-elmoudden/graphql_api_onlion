import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private readonly jwtService: JwtService,
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
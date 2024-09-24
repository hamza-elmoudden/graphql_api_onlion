import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard as PassportAuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends PassportAuthGuard('jwt') {
  handleRequest(err, user, info: Error | null) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}

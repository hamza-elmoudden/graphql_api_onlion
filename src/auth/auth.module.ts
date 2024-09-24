import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthResolver } from './auth.resolver';
import { jwtConstants } from './constants';
import { AuthMiddleware } from './auth.middleware';
import { JwtAuthGuard } from './auth.guard';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  providers: [
    AuthService, AuthResolver,AuthMiddleware,JwtAuthGuard
  ],
  imports:[UserModule,

    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '2d' },
      }),
      inject: [ConfigService],
    }),
    
    UserModule,
  ],
  exports: [AuthService,JwtModule,AuthMiddleware]
})
export class AuthModule {
  configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(AuthMiddleware)
        .forRoutes('*'); // or specific routes
    }
}

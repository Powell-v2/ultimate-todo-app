import { forwardRef, Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthenticationService } from './authentication.service';
import { JwtAuthenticationGuard } from './jwt-authentication.guard';
import { JwtStrategy } from './jwt.strategy';
import * as jwtConstants from '../common/constants/jwt';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.SECRET,
      signOptions: {
        expiresIn: jwtConstants.EXPIRES_IN
      }
    })
  ],
  providers: [AuthenticationService, JwtStrategy, {
    provide: APP_GUARD,
    useClass: JwtAuthenticationGuard,
  }],
  exports: [AuthenticationService],
})

export class AuthenticationModule { }

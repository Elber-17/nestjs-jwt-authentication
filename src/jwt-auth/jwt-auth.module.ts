import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import { LocalStrategy } from './strategies/local.strategy';

import { UsersModule } from 'src/users/users.module';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtAuthService } from './services/jwt-auth.service';
import { JwtAuthController } from './controllers/jwt-auth.controller';

@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.registerAsync({
            useFactory: async () => {
                let configService: ConfigService = new ConfigService();

                return {
                    secret: configService.get('JWT_SECRET'),
                    signOptions: { expiresIn: '60s' },
                };
            },
        }),
    ],
    providers: [JwtAuthService, LocalStrategy, JwtStrategy],
    exports: [JwtAuthService],
    controllers: [JwtAuthController],
})
export class JwtAuthModule {}

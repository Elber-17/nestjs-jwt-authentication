import { Controller, Request, Post, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { JwtAuthService } from '../services/jwt-auth.service';

@Controller('auth')
export class JwtAuthController {
    constructor(private readonly jwtAuthService: JwtAuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return this.jwtAuthService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('protected-route')
    getProfile(@Request() req) {
        return req.user;
    }
}

import { Controller, Post, Request, Response, UseGuards } from '@nestjs/common';
import { Public } from '../decorators/public-decorator';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Response() res) {
    const accessToken = await this.authService.login(req.user);

    res.cookie('accessToken', accessToken, {
      sameSite: 'strict',
      httpOnly: true,
    });

    return res.send(req.user);
  }
}

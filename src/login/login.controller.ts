import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<string | boolean> {
    return this.loginService.login(email, password);
  }
}

import { Body, Controller, Post } from '@nestjs/common';
import { SignUpService } from './sign-up.service';

@Controller('sign-up')
export class SignUpController {
  constructor(private readonly signUpService: SignUpService) {}

  @Post()
  signUp(
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<boolean> {
    return this.signUpService.createAccount(email, password);
  }
}

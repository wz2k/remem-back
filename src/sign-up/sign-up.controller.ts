import { Body, Controller, Post } from '@nestjs/common';
import { Public } from '../decorators/public-decorator';
import { SignUpService } from './sign-up.service';

@Controller('sign-up')
export class SignUpController {
  constructor(private readonly signUpService: SignUpService) {}

  @Public()
  @Post()
  signUp(
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<boolean> {
    return this.signUpService.signUp(email, password);
  }
}

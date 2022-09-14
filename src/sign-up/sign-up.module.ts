import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { SignUpController } from './sign-up.controller';
import { SignUpService } from './sign-up.service';

@Module({
  imports: [UserModule],
  controllers: [SignUpController],
  providers: [SignUpService],
})
export class SignUpModule {}

import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { SignUpModule } from './sign-up/sign-up.module';

@Module({
  imports: [LoginModule, SignUpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

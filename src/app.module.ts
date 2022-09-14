import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SignUpModule } from './sign-up/sign-up.module';

@Module({
  imports: [SignUpModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

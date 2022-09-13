import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
  controllers: [LoginController],
  providers: [LoginService, PrismaService],
})
export class LoginModule {}

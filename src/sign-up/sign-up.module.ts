import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SignUpController } from './sign-up.controller';
import { SignUpService } from './sign-up.service';

@Module({
  controllers: [SignUpController],
  providers: [SignUpService, PrismaService],
})
export class SignUpModule {}

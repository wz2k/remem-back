import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService {
  constructor(private readonly prisma: PrismaService) {}

  async login(email: string, password: string): Promise<boolean | string> {
    const data = await this.prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        password: true,
      },
    });

    if (data === null) {
      return 'Email is incorrect';
    }

    if (bcrypt.compareSync(password, data.password)) {
      return true;
    }

    return 'Password is incorrect';
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SignUpService {
  constructor(private readonly prisma: PrismaService) {}

  async createAccount(email: string, password: string): Promise<boolean> {
    const inDb = await this.prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        email: true,
      },
    });

    if (inDb !== null) {
      return false;
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    await this.prisma.user.create({
      data: {
        email,
        password: hash,
      },
    });
    return true;
  }
}

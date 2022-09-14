import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class SignUpService {
  constructor(private readonly userService: UserService) {}

  async signUp(email: string, password: string): Promise<boolean> {
    const user = await this.userService.findUser(email);

    if (user !== null) {
      return false;
    }

    await this.userService.createUser(email, password);

    return true;
  }
}

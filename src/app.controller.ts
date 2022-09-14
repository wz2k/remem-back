import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './decorators/public-decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  test(@Request() req, @Body('password') password: string) {
    console.log(password);
    return req.user.email;
  }
}

import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail/mail-service';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  getHello() {
    return this.prisma.notification.findMany();
  }
}

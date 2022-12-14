import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SMTPMailService } from './mail/smtp-mail-service';
import { HttpModule } from './http-module';
import { MailService } from './mail/mail-service';
import { PostmarkMailService } from './mail/postmark-mail';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [{
    provide: MailService,
    useClass: PostmarkMailService,
  }],
})
export class AppModule {}

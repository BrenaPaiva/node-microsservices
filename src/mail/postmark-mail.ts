import { MailService } from "./mail-service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PostmarkMailService implements MailService{
    sendEmail(): string {
        return 'Postmark Mail!'
    }
}
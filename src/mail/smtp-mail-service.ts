import { MailService } from "./mail-service";
import { Injectable } from "@nestjs/common"

@Injectable()
export class SMTPMailService implements MailService{
    sendEmail(): string {
        return 'SMPT Mail!'
    }
}
import Mail from "nodemailer/lib/mailer";
import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer'

export class MailTrapProvider implements IMailProvider{
    private transporter: Mail;
    constructor () {
        this.transporter = nodemailer.createTransport({
            host: '',
            port: 2525,
            auth: {
                user: '',
                pass: ''
            }
        })
    }
    async sendMail(message: IMessage): Promise<void> {
        this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email,
            },
            from: {
                name: message.to.name,
                address: message.to.email,
            },
            subject: message.subject,
            html: message.body
        })
    }
}
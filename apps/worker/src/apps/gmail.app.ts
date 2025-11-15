import { createTransport, type Transporter } from "nodemailer";
import type { gmail_type } from "../types/index.js";
import { prisma, schemaType } from "@master/database";
import type {
  SentMessageInfo,
  Options,
} from "nodemailer/lib/smtp-transport/index.js";

class mail_sender {
  private transport: Transporter<SentMessageInfo, Options> | undefined;

  async send_emiail_message(
    sender_email: gmail_type["sender_email"],
    sender_app_pass: gmail_type["sender_app_pass"],
    recever_email: gmail_type["recever_email"],
    message: gmail_type["message"],
    subject: gmail_type["subject"],
    stepes_run_id: number,
    index: number
  ) {
    this.transport = await createTransport({
      service: "gmail",
      auth: {
        user: sender_email,
        pass: sender_app_pass,
      },
    });
    const result = await this.transport.sendMail(
      {
        from: sender_email,
        to: recever_email,
        subject: subject,
        text: message,
      },
      async (err, info) => {
        if (err) {
          console.error(err);
          process.exit(1);
        } else {
          

          const save_message_id = await prisma.working_step_validator.create({
            data: {
              message_id: info.messageId,
              stepes_run_id: stepes_run_id,
              email: recever_email,
              status: schemaType.step_validation_status.SUCCCESS,
              create_at: new Date(),
              index: index,
            },
          });
          if (!save_message_id) {
            console.log("db error");

            throw new Error();
          }

         
          return true;
        }

      }
      
    );

  }
}

export { mail_sender };

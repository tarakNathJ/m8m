import { mail_sender } from "../apps/gmail.app.js";
import { send_message_on_telegram_bot } from "../apps/telegram.app.js";
import type {
  object_type_for_email,
  object_type_for_telegram,
} from "../types/index.js";

class request_transfer_on_your_right_direction {
  async routing_all_request_on_right_direction(
    app_name: string,
    data: object_type_for_email | object_type_for_telegram
  ) {
    if (app_name === "gmail") {
      const status = await new mail_sender().send_emiail_message(
        (data as object_type_for_email).sender_email,
        (data as object_type_for_email).app_password,
        (data as object_type_for_email).receiver_email,
        (data as object_type_for_email).message,
        (data as object_type_for_email).subject,
        (data as object_type_for_email).stepes_run_id,
        (data as object_type_for_email).stage
      );
      return status;
    } else if (app_name === "telegram") {
        const status = await new send_message_on_telegram_bot().telegram_init_state(
            (data as object_type_for_telegram).token,
            (data as object_type_for_telegram).chat_id,
            (data as object_type_for_telegram).message
        );
        return status;
    }
    return false;
  }
}


export { request_transfer_on_your_right_direction }
import type { responceType } from "../types/index.js";

class api_responce {
  statuscode: responceType["statusCode"];
  data: responceType["data"];
  message: responceType["message"];
  success: responceType["success"];
  constructor(
    statusCode: responceType["statusCode"],
    data: responceType["data"],
    message: responceType["message"] = "success"
  ) {
    this.statuscode = statusCode;
    this.data = data;
    this.message = message;
    this.success =  statusCode <400 ? true :false
  }
}


export default api_responce;
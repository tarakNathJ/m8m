import type { Request, Response, NextFunction } from "express";
import type { asyncFunction, type_for_responce } from "./types/index.js";
import promClient from "prom-client";

const async_handler =
  (func: asyncFunction) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await func(req, res, next);
    } catch (error: any) {
      return res.status(error.status || error.statusCode || 500).json({
        success: false,
        message: error.message,
      });
    }
  };

class api_responce {
  statuscode: type_for_responce["statuscode"];
  data: type_for_responce["data"];
  message: type_for_responce["message"];
  success: type_for_responce["success"];

  constructor(
    statuscode: type_for_responce["statuscode"],
    data: type_for_responce["data"],
    message: type_for_responce["message"] = "success"
  ) {
    this.statuscode = statuscode;
    this.data = data;
    this.message = message;
    this.success = statuscode < 400;
  }
}

class api_error extends Error {
  statuscode!: type_for_responce["statuscode"];
  errors: type_for_responce["error"];
  override stack!: string;
  message: type_for_responce["message"];
  data: any[];

  constructor(
    statusCode: type_for_responce["statuscode"],
    message: type_for_responce["message"] = "something  went Wrong",
    errors: type_for_responce["error"] = [],
    stack = ""
  ) {
    super(message);
    this.statuscode = statusCode;
    this.message = message;
    this.data = [];
    this.errors = errors;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

// metrix collect

const collectDefaultMetrics = promClient.collectDefaultMetrics;
collectDefaultMetrics({ register: promClient.register });

const metrix_handler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.set("Content-Type", promClient.register.contentType);
  return res.send(await promClient.register.metrics());
};

export { api_error, api_responce, async_handler ,metrix_handler };

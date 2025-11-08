import type { Response, Request, NextFunction } from "express";
import type { async_handler_type } from "../types/index.js";

const async_handler =
  (fanc: async_handler_type) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fanc(req, res, next);
    } catch (error: any) {
      return res.status(error.status || error.statusCode || 500).json({
        success: false,
        message: error.message
      });
    }
};

export default async_handler;

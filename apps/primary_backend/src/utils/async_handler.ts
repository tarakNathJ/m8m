import type { Request, Response, NextFunction } from "express";
import type { asyncFunction } from '../types/index.js'

const async_handler =
  (func: asyncFunction) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await func(req, res, next);
    } catch (error: any) {
      return res.status(error.code || 500).json({
        success: false,
        message: error.message,
      });
    }
  };


export {async_handler}
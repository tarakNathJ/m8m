import {
  PrismaClient,
  status,
  work_type,
  working_status,
  step_validation_status,
} from "@prisma/client";
import { config } from "dotenv";

config()
declare global {
  var prisma: PrismaClient | undefined
}

export const  prisma = globalThis.prisma ||  new PrismaClient({
    log: ["query", "error", "warn"],
  });


if (process.env.NODE_ENV !== "production") global.prisma = prisma;


export const  schemaType  : any = {
   status ,work_type , working_status , step_validation_status
}
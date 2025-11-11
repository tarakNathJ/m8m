import {
  PrismaClient,
  status,
  work_type,
  working_status,
  step_validation_status,
  Type
  
} from "../generated/prisma/index.js";
import { config } from "dotenv";

config()
declare global {
  var prisma: PrismaClient | undefined;
}





export const prisma = global.prisma || new PrismaClient({
    log: ["query", "error", "warn"],
  });



if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export const schemaType = {
  status,
  work_type,
  working_status,
  step_validation_status,
  Type
  
} as const;
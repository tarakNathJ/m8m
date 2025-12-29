import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./router/index.route.js";
import { metrix_handler, req_res_time } from "@repo/handler";
import responseTime from "response-time";

class express_server {
  app = express();
  constructor() {
    this.app.use(
      cors({
        origin: "*",
      })
    );

    this.app.use(
      responseTime((req, res, time) => {
        req_res_time
          .labels({
            method: req.method || "UNKNOWN_METHOD",
            route:
              //@ts-ignore
              (req.route && req.route.path) ||
              //@ts-ignore
              req.originalUrl ||
              req.url ||
              "UNKNOWN_ROUTE",
            status_code: res.statusCode.toString(),
          })
          .observe(time);
      })
    );

    this.app.use(express.json());
    this.app.use(bodyParser.json());
    this.app.use("/api/workflow", router);
    this.app.get("/metrics", metrix_handler);
  }
}

export default express_server;

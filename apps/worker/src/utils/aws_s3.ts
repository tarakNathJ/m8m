import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import type { AwsCredentialIdentity } from "@aws-sdk/types";
import { prisma } from "@master/database";
import axios from "axios";
import fs from "fs";
import path from "path";
import { config } from "dotenv";
config();

class aws_s3_service_provider {
  private s3_client: S3Client | undefined;
  private bucket_name: string | undefined;

  constructor() {
    this.bucket_name = process.env.AWS_S3_BUCKET_NAME;
    const s3_region = process.env.AWS_S3_REGION;
    const s3_access_key = process.env.AWS_S3_ACCESS_KEY;
    const s3_secret_key = process.env.AWS_S3_SECRET_KEY;
    this.s3_client = new S3Client({
      region: s3_region as string,
      credentials: {
        accessKeyId: s3_access_key,
        secretAccessKey: s3_secret_key,
      } as AwsCredentialIdentity,
    });
  }

  //   generate pre-sign url
  private async generate_presigned_url(filename: string) {
    try {
      const command = new GetObjectCommand({
        Bucket: this.bucket_name,
        Key: filename,
      });

      const expires_in = 60 * 20;
      return await getSignedUrl(this.s3_client as S3Client, command, {
        expiresIn: expires_in,
      });
    } catch (error: any) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }
  //download file and save all data
  public async download_file(filename: string): Promise<string | boolean> {
    try {
        // get pre sign url 
      const pre_sign_url = await this.generate_presigned_url(filename);
      if (!pre_sign_url) {
        console.error("pre-sign url not found");
        return false;
      }
      // get file from aws s3
      const responce = await axios.get(pre_sign_url, {
        responseType: "json",
      });

    //   download this file and  send folder path
    const folder = './emails';
    const file_name = `${new Date()}`
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
    }
    const file_path = path.join(folder, file_name)
    const json_data = JSON.stringify(responce.data);
    fs.writeFileSync(file_path, json_data , "utf-8");
    
    return `./emails/${file_name}`;
    } catch (error: any) {
      console.error(error.message);
      throw new Error(error.message);
    }
  }

  
}


export { aws_s3_service_provider };
import { Injectable, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { S3Client, PutObjectCommand, S3ClientConfig } from '@aws-sdk/client-s3'
import { v4 as uuid } from 'uuid'
import type { Express } from 'express'

@Injectable()
export class UploadsService {
  private readonly s3Client: S3Client
  private readonly logger = new Logger(UploadsService.name)

  constructor(private readonly configService: ConfigService) {
    const region = this.configService.get<string>('AWS_REGION')
    const accessKeyId = this.configService.get<string>('AWS_ACCESS_KEY_ID')
    const secretAccessKey = this.configService.get<string>(
      'AWS_SECRET_ACCESS_KEY',
    )

    const s3Config: S3ClientConfig = {
      region,
    }

    if (accessKeyId && secretAccessKey) {
      s3Config.credentials = {
        accessKeyId,
        secretAccessKey,
      }
    }

    this.s3Client = new S3Client(s3Config)
  }

  async uploadFile(file: Express.Multer.File): Promise<string> {
    this.logger.log(`File ${file.originalname} is uploaded`)
    const bucketName = this.configService.get<string>('AWS_S3_BUCKET_NAME')
    const fileName = `${uuid()}-${file.originalname}`

    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: fileName,
      Body: file.buffer,
      ContentType: file.mimetype,
    })

    await this.s3Client.send(command)
    this.logger.log(`file ${file.originalname} was sucesfully uploaded`)
    // Note: The public URL format can vary based on region and bucket settings.
    // This format is common but might need adjustment.
    return `https://${bucketName}.s3.${this.configService.get<string>('AWS_REGION')}.amazonaws.com/${fileName}`
  }
}

import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common'
import { OffersService } from './offers.service'
import { Offer } from './entities/offer.entity'
import { FileInterceptor } from '@nestjs/platform-express'
import type { Express } from 'express'
import { UploadsService } from '../uploads/uploads.service'

@Controller('offers')
export class OffersController {
  constructor(
    private readonly offersService: OffersService,
    private readonly uploadsService: UploadsService,
  ) {}

  @Get()
  findAll(): Promise<Offer[]> {
    return this.offersService.findAll()
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const uploadedFileUrl = await this.uploadsService.uploadFile(file)
    return {
      message: 'File uploaded successfully',
      url: uploadedFileUrl,
    }
  }
}

import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common'
import { CommandBus, QueryBus } from '@nestjs/cqrs'
import { FileInterceptor } from '@nestjs/platform-express'
import type { Express } from 'express'
import { CreateOfferCommand } from './commands/impl/create-offer.command'
import { CreateOfferDto } from './dtos/create-offer.dto'
import { OfferType } from './enums/type.enum'
import { FindAllOffersQuery } from './queries/impl/find-all-offers.query'
import { UploadsService } from '../uploads/uploads.service'

@Controller('offers')
export class OffersController {
  constructor(
    private readonly uploadsService: UploadsService,
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @Post()
  create(@Body() createOfferDto: CreateOfferDto) {
    return this.commandBus.execute(new CreateOfferCommand(createOfferDto))
  }

  @Get()
  findAll(
    @Query('type') type?: OfferType,
    @Query('lat') lat?: number,
    @Query('lng') lng?: number,
  ) {
    return this.queryBus.execute(new FindAllOffersQuery(type, lat, lng))
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

import { Module } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Offer } from '../database/entities/offer.entity'
import { CreateOfferHandler } from './commands/handlers/create-offer.handler'
import { FindAllOffersHandler } from './queries/handlers/find-all-offers.handler'
import { OffersController } from './offers.controller'
import { OffersService } from './offers.service'
import { UploadsModule } from '../uploads/uploads.module'

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Offer]), UploadsModule],
  controllers: [OffersController],
  providers: [OffersService, FindAllOffersHandler, CreateOfferHandler],
  exports: [OffersService],
})
export class OffersModule {}

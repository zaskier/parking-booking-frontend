import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Offer } from './entities/offer.entity'
import { OffersController } from './offers.controller'
import { OffersService } from './offers.service'
import { UploadsModule } from '../uploads/uploads.module'

@Module({
  imports: [TypeOrmModule.forFeature([Offer]), UploadsModule],
  controllers: [OffersController],
  providers: [OffersService],
  exports: [OffersService],
})
export class OffersModule {}

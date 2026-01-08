import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Offer } from '../../offers/entities/offer.entity'
import { SeedService } from './seed.service'
import { OffersModule } from '../../offers/offers.module'

@Module({
  imports: [TypeOrmModule.forFeature([Offer]), OffersModule],
  providers: [SeedService],
  exports: [SeedService],
})
export class SeedModule {}

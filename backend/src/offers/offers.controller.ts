import { Controller, Get } from '@nestjs/common'
import { OffersService } from './offers.service'
import { Offer } from './entities/offer.entity'

@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  @Get()
  findAll(): Promise<Offer[]> {
    return this.offersService.findAll()
  }
}

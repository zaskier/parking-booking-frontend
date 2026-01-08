import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Offer } from '../../offers/entities/offer.entity'
import { Repository } from 'typeorm'
import { OFFERS_SEED_DATA } from './data/offers.seed.data'

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Offer)
    private readonly offerRepository: Repository<Offer>,
  ) {}

  async seed() {
    await this.offerRepository.clear()
    const offers = this.offerRepository.create(OFFERS_SEED_DATA)
    await this.offerRepository.save(offers)
  }
}

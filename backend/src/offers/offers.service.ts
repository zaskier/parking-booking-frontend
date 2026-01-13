import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Offer } from '../database/entities/offer.entity'
import { CreateOfferDto } from './dtos/create-offer.dto'

@Injectable()
export class OffersService {
  constructor(
    @InjectRepository(Offer)
    private readonly offerRepository: Repository<Offer>,
  ) {}

  async create(createOfferDto: CreateOfferDto): Promise<Offer> {
    const offer = this.offerRepository.create(createOfferDto)
    return this.offerRepository.save(offer)
  }
}

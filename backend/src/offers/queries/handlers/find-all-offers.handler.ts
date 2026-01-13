import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Offer } from '../../entities/offer.entity'
import { FindAllOffersQuery } from '../impl/find-all-offers.query'

@QueryHandler(FindAllOffersQuery)
export class FindAllOffersHandler implements IQueryHandler<FindAllOffersQuery> {
  constructor(
    @InjectRepository(Offer)
    private readonly offerRepository: Repository<Offer>,
  ) {}

  async execute(query: FindAllOffersQuery): Promise<Offer[]> {
    const { type } = query

    if (type) {
      return this.offerRepository
        .createQueryBuilder('offer')
        .where('LOWER(offer.type::text) = LOWER(:type)', { type })
        .getMany()
    }

    return this.offerRepository.find()
  }
}

import { CreateOfferDto } from '../../dtos/create-offer.dto'

export class CreateOfferCommand {
  constructor(public readonly createOfferDto: CreateOfferDto) {}
}

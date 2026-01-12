import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateOfferCommand } from '../impl/create-offer.command';
import { OffersService } from '../../offers.service';

@CommandHandler(CreateOfferCommand)
export class CreateOfferHandler implements ICommandHandler<CreateOfferCommand> {
  constructor(private readonly offersService: OffersService) {}

  async execute(command: CreateOfferCommand): Promise<any> {
    return this.offersService.create(command.createOfferDto);
  }
}

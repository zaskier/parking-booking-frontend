import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { OfferType } from '../enums/type.enum'

@Entity('offers')
export class Offer {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  content: string

  @Column()
  image: string

  @Column({ type: 'decimal' })
  price: number

  @Column()
  city: string

  @Column({
    type: 'enum',
    enum: OfferType,
    default: OfferType.Any,
  })
  type: OfferType
}

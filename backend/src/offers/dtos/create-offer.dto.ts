import { IsString, IsNotEmpty, IsNumber, IsEnum, IsUrl } from 'class-validator'
import { OfferType } from '../enums/type.enum'

export class CreateOfferDto {
  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  @IsNotEmpty()
  content: string

  @IsUrl()
  image: string

  @IsNumber()
  price: number

  @IsString()
  @IsNotEmpty()
  city: string

  @IsEnum(OfferType)
  type: OfferType
}

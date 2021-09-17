import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePropertyDto {
  @IsNotEmpty()
  ownerName: string;

  @IsNotEmpty()
  customerName: string;

  @IsNotEmpty()
  @IsNumber()
  value: number;
}

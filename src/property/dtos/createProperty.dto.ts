import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePropertyDto {
  @ApiProperty()
  @IsNotEmpty()
  ownerName: string;

  @IsNotEmpty()
  @ApiProperty()
  customerName: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  value: number;
}

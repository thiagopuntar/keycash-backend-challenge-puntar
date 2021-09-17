import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class FilterPropertyDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  ownerName?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  customerName?: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  value?: number;
}

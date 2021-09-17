import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdatePropertyDto {
  @IsString()
  @IsOptional()
  ownerName?: string;

  @IsString()
  @IsOptional()
  customerName?: string;

  @IsNumber()
  @IsOptional()
  value?: number;
}

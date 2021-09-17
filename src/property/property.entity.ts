import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('properties')
export class PropertyEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  ownerName: string;

  @Column()
  @ApiProperty()
  customerName: string;

  @Column()
  @ApiProperty()
  value: number;
}

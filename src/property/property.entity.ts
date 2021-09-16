import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('properties')
export class PropertyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ownerName: string;

  @Column()
  customerName: string;

  @Column()
  value: number;
}

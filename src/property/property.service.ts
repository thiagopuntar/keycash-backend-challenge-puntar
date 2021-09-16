import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PropertyEntity } from './property.entity';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(PropertyEntity)
    private propertyRepository: Repository<PropertyEntity>,
  ) {}

  async find(): Promise<PropertyEntity[]> {
    return this.propertyRepository.find();
  }

  // async findOne(id: number): Promise<PropertyEntity> {}

  // async create(data: any): Promise<PropertyEntity> {}

  // async update(id: number, data: any): Promise<PropertyEntity> {}

  // async delete(id: number): Promise<PropertyEntity> {}
}

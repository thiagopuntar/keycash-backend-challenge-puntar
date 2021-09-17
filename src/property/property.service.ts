import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePropertyDto } from './dtos/createProperty.dto';
import { FilterPropertyDto } from './dtos/filterProperty.dto';
import { UpdatePropertyDto } from './dtos/updateProperty.dto';
import { PropertyEntity } from './property.entity';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(PropertyEntity)
    private propertyRepository: Repository<PropertyEntity>,
  ) {}

  async find(filterPropertyDto?: FilterPropertyDto): Promise<PropertyEntity[]> {
    return this.propertyRepository.find({
      where: {
        ...filterPropertyDto,
      },
    });
  }

  async findOne(id: number): Promise<PropertyEntity> {
    const property = await this.propertyRepository.findOne(id);

    if (!property) {
      throw new NotFoundException(`Property id ${id} not found`);
    }

    return property;
  }

  async create(data: CreatePropertyDto): Promise<PropertyEntity> {
    const created = await this.propertyRepository.save(data);
    return created;
  }

  async update(id: number, data: UpdatePropertyDto): Promise<PropertyEntity> {
    const property = await this.findOne(id);
    const updated = await this.propertyRepository.save({
      ...property,
      ...data,
    });
    return updated;
  }

  async delete(id: number): Promise<PropertyEntity> {
    const property = await this.findOne(id);
    await this.propertyRepository.delete(id);
    return property;
  }
}

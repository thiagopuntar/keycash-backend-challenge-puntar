import { Controller, Get, Param } from '@nestjs/common';
import { PropertyEntity } from './property.entity';
import { PropertyService } from './property.service';

@Controller('properties')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Get()
  async find(): Promise<PropertyEntity[]> {
    const properties = await this.propertyService.find();
    return properties;
  }
  // @Get(':/id')
  // async findOne(@Param() id: number): Promise<PropertyEntity> {
  //   const property = await this.propertyService.findOne(id);
  //   return property;
  // }
  // @Post()
  // async create(): Promise<PropertyEntity> {
  //   const property = await this.propertyService.create();
  //   return property;
  // }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dtos/createProperty.dto';
import { UpdatePropertyDto } from './dtos/updateProperty.dto';
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
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<PropertyEntity> {
    const property = await this.propertyService.findOne(id);
    return property;
  }
  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() property: CreatePropertyDto): Promise<PropertyEntity> {
    const created = await this.propertyService.create(property);
    return created;
  }
  @Put(':id')
  @UsePipes(ValidationPipe)
  async update(@Param('id') id: number, @Body() data: UpdatePropertyDto) {
    await this.propertyService.findOne(id);
    const updated = await this.propertyService.update(id, data);
    return updated;
  }
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<PropertyEntity> {
    const deleted = await this.propertyService.delete(id);
    return deleted;
  }
}

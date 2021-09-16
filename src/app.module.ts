import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyController } from './property/property.controller';
import { PropertyService } from './property/property.service';
import { PropertyModule } from './property/property.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PropertyModule],
  controllers: [PropertyController],
  providers: [PropertyService],
})
export class AppModule {}

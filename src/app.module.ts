import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyController } from './property/property.controller';
import { PropertyService } from './property/property.service';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [PropertyController],
  providers: [PropertyService],
})
export class AppModule {}

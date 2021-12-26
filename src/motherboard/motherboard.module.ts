import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MotherboardController } from './motherboard.controller';
import { Motherboard } from './motherboard.entity';
import { MotherboardService } from './motherboard.service';

@Module({
  imports: [TypeOrmModule.forFeature([Motherboard])],
  controllers: [MotherboardController],
  providers: [MotherboardService]
})
export class MotherboardModule {}

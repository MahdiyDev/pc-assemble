import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CpuController } from './cpu.controller';
import { Cpu } from './cpu.entity';
import { CpuService } from './cpu.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cpu])],
  controllers: [CpuController],
  providers: [CpuService]
})
export class CpuModule {}

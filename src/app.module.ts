import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CpuModule } from './cpu/cpu.module';
import { MotherboardModule } from './motherboard/motherboard.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1407',
      database: 'pc_assemble',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true
    }),
    CpuModule,
    MotherboardModule
  ]
})
export class AppModule {}

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Cpu } from './cpu.entity';
import { CpuService } from './cpu.service';

@Controller('cpu')
export class CpuController {
    constructor(
        private readonly cpuService: CpuService
    ) {}

    @Get()
    getCpu() {
        return this.cpuService.getCpu()
    }

    @Get(':socket')
    getSingleCpu(
        @Param('socket') cpu_socket: string
    ) {
        return this.cpuService.getSingleCpu(cpu_socket)
    }

    @Post()
    createCpu(
        @Body() cpu: Cpu
    ) {
        return this.cpuService.createCpu(cpu)
    }

    @Put()
    updateCpu(
        @Body() cpu: Cpu
    ) {
        return this.cpuService.updateCpu(cpu)
    }

    @Delete()
    deleteCpu(
        @Body('cpu_uid') cpu_uid: string,
    ) {
        return this.cpuService.deleteCpu(cpu_uid)
    }
}

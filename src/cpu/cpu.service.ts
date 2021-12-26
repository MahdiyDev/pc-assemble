import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cpu } from './cpu.entity';

@Injectable()
export class CpuService {
    constructor(
        @InjectRepository(Cpu)
        private cpuRepository: Repository<Cpu>
    ) {}

    async getCpu(): Promise<Cpu[]> {
        return await this.cpuRepository.find()
    }

    async getSingleCpu(cpu_socket: string): Promise<Cpu[]> {
        return await this.cpuRepository.find({ cpu_socket })
    }

    async createCpu(cpu: Cpu): Promise<Cpu> {
        const newCpu = this.cpuRepository.create(cpu)
        return await this.cpuRepository.save(newCpu)
    }

    async updateCpu(cpu: Cpu) {
        const foundCpu = await this.cpuRepository.findOne(cpu.cpu_uid)
        if (foundCpu) {
            foundCpu.cpu_name = cpu.cpu_name
            foundCpu.cpu_socket = cpu.cpu_socket
            foundCpu.cpu_des = cpu.cpu_des
            return this.cpuRepository.save(foundCpu)
        } else {
            return new NotFoundException()
        }
    }

    async deleteCpu(cpu_uid: string) {
        const foundCpu = await this.cpuRepository.findOne({ cpu_uid })
        if (foundCpu) {
            this.cpuRepository.delete(foundCpu)
            return { message: "CPU deleted" }
        } else {
            return new NotFoundException()
        }
    }
}

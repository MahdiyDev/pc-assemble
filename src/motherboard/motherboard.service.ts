import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Motherboard } from './motherboard.entity';

@Injectable()
export class MotherboardService {
    constructor(
        @InjectRepository(Motherboard)
        private motherboardReposity: Repository<Motherboard>
    ) {}

    async getMotherboard(): Promise<Motherboard[]> {
        return await this.motherboardReposity.find()
    }

    async getSingleMoatherboard(motherboard_socket: string): Promise<Motherboard[]> {
        return await this.motherboardReposity.find({ motherboard_socket })
    }

    async createMotherboard(motherboard: Motherboard): Promise<Motherboard> {
        const newMotherboard = this.motherboardReposity.create(motherboard)

        return this.motherboardReposity.save(newMotherboard)
    }

    async updateMotherboard(motherboard: Motherboard) {
        const foundMotherboard = await this.motherboardReposity.findOne(motherboard.motherboard_uid)

        if (foundMotherboard) {
            foundMotherboard.motherboard_name = motherboard.motherboard_name
            foundMotherboard.motherboard_socket = motherboard.motherboard_socket
            foundMotherboard.motherboard_des = motherboard.motherboard_des

            return this.motherboardReposity.save(foundMotherboard)
        } else {
            return new NotFoundException()
        }
    }

    async deleteMotherboard(motherboard_uid: string) {
        const foundMotherboard = await this.motherboardReposity.findOne(motherboard_uid)
        if (foundMotherboard) {
            await this.motherboardReposity.delete(foundMotherboard)     
            return { message: 'deleted' }       
        } else {
            return new NotFoundException()
        }
    }
}

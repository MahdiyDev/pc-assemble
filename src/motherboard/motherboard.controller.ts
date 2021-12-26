import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Motherboard } from './motherboard.entity';
import { MotherboardService } from './motherboard.service';

@Controller('motherboard')
export class MotherboardController {
    constructor(private readonly motherboardSrvice: MotherboardService) {}

    @Get()
    getMotherboard() {
        return this.motherboardSrvice.getMotherboard()
    }

    @Get(':socket')
    getSingleMotherboard(
        @Param('socket') motherboard_socket: string
    ) {
        return this.motherboardSrvice.getSingleMoatherboard(motherboard_socket)
    }

    @Post()
    createMotherboard(
        @Body() motherboard: Motherboard
    ) {
        return this.motherboardSrvice.createMotherboard(motherboard)
    }

    @Put()
    updateMotherboard(
        @Body() motherboard: Motherboard
    ) {
        return this.motherboardSrvice.updateMotherboard(motherboard)
    }

    @Delete()
    deleteMotherboard(
        @Body('motherboard_uid') motherboard_uid: string
    ) {
        return this.motherboardSrvice.deleteMotherboard(motherboard_uid)
    }
}

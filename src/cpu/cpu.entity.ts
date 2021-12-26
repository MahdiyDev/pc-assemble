import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cpu {
    @PrimaryGeneratedColumn('uuid')
    cpu_uid: string
    @Column()
    cpu_name: string
    @Column()
    cpu_socket: string
    @Column()
    cpu_des: string
    @Column()
    cpu_max_ram: string
}
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Motherboard {
    @PrimaryGeneratedColumn('uuid')
    motherboard_uid: string
    @Column()
    motherboard_name: string
    @Column()
    motherboard_socket: string
    @Column()
    motherboard_des: string
}
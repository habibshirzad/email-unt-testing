import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity()
export class EmailEntity{
    

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string

}
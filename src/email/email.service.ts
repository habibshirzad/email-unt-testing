import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EmailEntity } from "./email.entity";
import { Repository } from 'typeorm';
import { EmailDto } from "./email.dto";


@Injectable()
export class EmailService{
    constructor(
        @InjectRepository(EmailEntity) private emailRepository:Repository<EmailEntity>
    ){}


   async createEmail(emailDto:EmailDto){
        const email = this.emailRepository.create(emailDto)
        return await this.emailRepository.save(email)
    }

    async findEmail(id:number){
        return await this.emailRepository.findOne(id)
    }
}
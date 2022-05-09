import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { EmailDto } from "./email.dto";
import { EmailService } from "./email.service";



@Controller()
export class EmailController{
    constructor(
        private readonly emailService: EmailService
    ){}

    @Post()
    createEmail(@Body() emailDto:EmailDto){
        return this.emailService.createEmail(emailDto)
    }

    @Get(':id')
    findEmail(@Param('id') id:number){
        //  console.log( this.emailService.findEmail(Number(id)))
        return this.emailService.findEmail(Number(id))

    }
}
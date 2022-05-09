import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailController } from './email.controller';
import { EmailEntity } from './email.entity';
import { EmailService } from './email.service';


@Module({
    imports:[TypeOrmModule.forFeature([EmailEntity])],
    controllers:[EmailController],
    providers:[EmailService],
})
export class EmailModule {}

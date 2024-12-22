import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgramDetail } from './models/programDetails.entity';
import { ProgramDetailController } from './program-detail.controller';
import { ProgramDetailService } from './program-detail.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([ProgramDetail]),
    ],
    controllers: [ProgramDetailController],
    providers: [ProgramDetailService],
    exports: [ProgramDetailService]
})
export class ProgramDetailModule { }

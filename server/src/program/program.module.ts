import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Program } from './models/program.entity';
import { ProgramController } from './program.controller';
import { ProgramService } from './program.service';
import { CategoryModule } from 'src/category/category.module';
import { ProgramDetailModule } from 'src/program-detail/program-detail.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Program]),
        // forwardRef(() => CategoryModule),
        CategoryModule,
        ProgramDetailModule
    ],
    controllers: [ProgramController],
    providers: [ProgramService],
    exports: [ProgramService]
})
export class ProgramModule { }

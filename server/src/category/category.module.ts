import { forwardRef, Module } from '@nestjs/common';
import { SeedProvider } from './seeding/category.seeding';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './models/category.entity';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { ProgramModule } from 'src/program/program.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Category]),
        // forwardRef(() => ProgramModule),
    ],
    controllers: [CategoryController],
    providers: [CategoryService, SeedProvider],
    exports: [CategoryService]
})
export class CategoryModule { }

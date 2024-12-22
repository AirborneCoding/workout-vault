import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Program } from './models/program.entity';
import { Repository } from 'typeorm';
import { CategoryService } from 'src/category/category.service';
import { CreateProgramDto, UpdateProgramDto } from './dtos/program.dto';
import { ProgramDetail } from 'src/program-detail/models/programDetails.entity';
import { ProgramDetailService } from 'src/program-detail/program-detail.service';

@Injectable()
export class ProgramService {
    constructor(
        @InjectRepository(Program)
        private readonly programRepository: Repository<Program>,
        private readonly categoryService: CategoryService,
        private readonly programDetailService: ProgramDetailService
    ) { }

    //* ----------------------------------------------------------------

    /**
     * get all programs
     * @returns programs data
     */
    public async getPrograms(): Promise<Program[]> {
        const programs = await this.programRepository.find({
            relations: {
                category: true,
                details: true
            }
        })

        return programs
    }


    /**
     * create new program
     * @param createProgramDto 
     * @returns category created
     */
    public async create(createProgramDto: CreateProgramDto): Promise<Program> {

        const category = await this.categoryService.getCategoryById(createProgramDto.categoryId);
        if (!category) throw new NotFoundException('Category not found');

        const program = this.programRepository.create({
            ...createProgramDto,
            category,
            details: createProgramDto.details || {},
        });

        return await this.programRepository.save(program);
    }


    /**
     * todo => update program
     * @param programId 
     * @param updateProgramDto 
     * @returns updated Program
     */

    /**
     * find program by slug
     * @param slug 
     * @returns single program
     */
    public async singleProgram(slug: string): Promise<Program> {
        const program = await this.programRepository.findOne({
            where: { slug },
            relations: {
                category: true,
                details: true
            }
        })
        if (!program) throw new NotFoundException('Program Not Found');
        return program
    }

    /**
     * delete program
    * @param programId 
    * @returns success msg
    */
    public async delete(programId: number) {
        const program = await this.programRepository.findOne({ where: { id: programId } })
        if (!program) throw new NotFoundException('Program not found')
        await this.programRepository.remove(program)
        return { msg: 'Program deleted successfully' }
    }

}

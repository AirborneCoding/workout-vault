import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProgramDetail } from './models/programDetails.entity';
import { ProgramDetailDto } from './dtos/programDetails.dto';

@Injectable()
export class ProgramDetailService {

    constructor(
        @InjectRepository(ProgramDetail)
        private readonly programDeailsRepository: Repository<ProgramDetail>,
    ) { }

    // public async updateProgramDetail(id: number,programDetailsDto: ProgramDetailDto) {
    //     const programDeatils = await this.programDeailsRepository.findOne({
    //         where: { id }
    //     });
    //     if (!programDeatils) throw new NotFoundException("Product Deails not found");

    //     programDeatils.overview = programDetailsDto.overview ?? programDeatils.overview
    //     programDeatils.nutrition = programDetailsDto.nutrition ?? programDeatils.nutrition
    //     programDeatils.supplement = programDetailsDto.supplement ?? programDeatils.supplement
    //     programDeatils.plan = programDetailsDto.plan ?? programDeatils.plan
    //     programDeatils.pdf = programDetailsDto.pdf ?? programDeatils.pdf

    //     return this.programDeailsRepository.save(programDeatils);

    // }

    public async updateProgramDetail(id: number, programDetailsDto: ProgramDetailDto) {
        const programDetails = await this.programDeailsRepository.findOne({
            where: { id },
        });

        if (!programDetails) throw new NotFoundException("Program Details not found");

        // Update the fields only if they are provided in the DTO, otherwise retain the existing value
        programDetails.overview = programDetailsDto.overview ?? programDetails.overview;
        programDetails.nutrition = programDetailsDto.nutrition ?? programDetails.nutrition;
        programDetails.supplement = programDetailsDto.supplement ?? programDetails.supplement;
        programDetails.plan = programDetailsDto.plan ?? programDetails.plan;
        programDetails.pdf = programDetailsDto.pdf ?? programDetails.pdf;

        // Save and return the updated program details
        return this.programDeailsRepository.save(programDetails);
    }



}

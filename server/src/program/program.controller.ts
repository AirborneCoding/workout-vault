import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProgramService } from './program.service';
import { CreateProgramDto, UpdateProgramDto } from './dtos/program.dto';

@Controller('programs')
export class ProgramController {
    constructor(
        private readonly programService: ProgramService
    ) { }

    // create program
    @Post()
    public async createNewPrograms(
        @Body() body: CreateProgramDto
    ) {
        return this.programService.create(body)
    }

    // get all programs
    @Get()
    public async getAllPrograms() {
        return this.programService.getPrograms()
    }

    // get single program by slug
    @Get(":slug")
    public async getSingleProgram(
        @Param('slug') slug: string
    ) {
        return this.programService.singleProgram(slug)
    }

    // delete program by id
    @Delete(':id')
    public async deleteProgram(
        @Param('id', ParseIntPipe) id: number
    ) {
        return this.programService.delete(id)
    }

    // update program by id
    // @Put(':id')
    // public async updateProgram(
    //     @Param('id', ParseIntPipe) id: number,
    //     @Body() body: UpdateProgramDto
    // ) {
    //     return this.programService.update(id, body)
    // }
}

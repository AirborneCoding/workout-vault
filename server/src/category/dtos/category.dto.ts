import { IsOptional, IsString, MaxLength } from "class-validator"
import { Program } from "src/program/models/program.entity"

export class CreateCategoryDto {
    @IsString()
    @MaxLength(255)
    name: string
}

export class UpdateCategoryDto {
    @IsOptional()
    @IsString()
    @MaxLength(255)
    name?: string
}
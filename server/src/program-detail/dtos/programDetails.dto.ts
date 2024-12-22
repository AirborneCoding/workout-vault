import {
    IsString,
    IsNotEmpty,
    IsArray,
    IsEnum,
    IsOptional,
    IsNumber,
    Min,
    ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import {
    ProgramLevel,
    ProgramGender,
    ProgramEquipment,
    ProgramInterest,
} from 'src/utils/enums';

export class ProgramDetailDto {

    @IsOptional()
    @IsNumber()
    id?: number;

    @IsOptional()
    @IsString()
    overview?: string;

    @IsOptional()
    @IsString()
    nutrition?: string;

    @IsOptional()
    @IsString()
    supplement?: string;

    @IsOptional()
    @IsString()
    plan?: string;

    @IsOptional()
    @IsString()
    pdf?: string;
}



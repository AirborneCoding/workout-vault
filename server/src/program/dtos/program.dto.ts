import { Type } from 'class-transformer';
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
import { ProgramDetailDto } from 'src/program-detail/dtos/programDetails.dto';
import {
    ProgramLevel,
    ProgramGender,
    ProgramEquipment,
    ProgramInterest,
} from 'src/utils/enums';



export class CreateProgramDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsOptional()
    @IsString()
    image?: string;

    @IsNumber()
    @IsNotEmpty()
    categoryId: number;

    @IsArray()
    @IsEnum(ProgramLevel, { each: true })
    level: ProgramLevel[];

    @IsNumber()
    @Min(1)
    duration: number;

    @IsOptional()
    @IsString()
    description?: string;

    @IsArray()
    @IsEnum(ProgramGender, { each: true })
    gender: ProgramGender[];

    @IsNumber()
    @Min(1)
    workoutPerWeek: number;

    @IsEnum(ProgramEquipment)
    equipment: ProgramEquipment;

    @IsArray()
    @IsEnum(ProgramInterest, { each: true })
    interest: ProgramInterest[];

    @IsOptional()
    @ValidateNested()
    @Type(() => ProgramDetailDto)
    details?: ProgramDetailDto;
}




export class UpdateProgramDto {
    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    image?: string;

    @IsOptional()
    @IsNumber()
    categoryId?: number;

    @IsOptional()
    @IsArray()
    @IsEnum(ProgramLevel, { each: true })
    level?: ProgramLevel[];

    @IsOptional()
    @IsNumber()
    @Min(1)
    duration?: number;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsArray()
    @IsEnum(ProgramGender, { each: true })
    gender?: ProgramGender[];

    @IsOptional()
    @IsNumber()
    @Min(1)
    workoutPerWeek?: number;

    @IsOptional()
    @IsEnum(ProgramEquipment)
    equipment?: ProgramEquipment;

    @IsOptional()
    @IsArray()
    @IsEnum(ProgramInterest, { each: true })
    interest?: ProgramInterest[];

    @IsOptional()
    @ValidateNested()
    @Type(() => ProgramDetailDto)
    details?: ProgramDetailDto;
}

















// !----------------------------------------------------------------

// export class CreateProgramDto {
//     @IsString()
//     @IsNotEmpty()
//     title: string;

//     @IsOptional()
//     @IsString()
//     image?: string;

//     @IsNumber()
//     @IsNotEmpty()
//     categoryId: number;

//     @IsArray()
//     @IsEnum(ProgramLevel, { each: true })
//     level: ProgramLevel[];

//     @IsNumber()
//     @Min(1) // At least 1 week
//     duration: number;

//     @IsOptional()
//     @IsString()
//     description?: string;

//     @IsArray()
//     @IsEnum(ProgramGender, { each: true })
//     gender: ProgramGender[];

//     @IsNumber()
//     @Min(1) // At least 1 workout per week
//     workoutPerWeek: number;

//     @IsEnum(ProgramEquipment)
//     equipment: ProgramEquipment;

//     @IsArray()
//     @IsEnum(ProgramInterest, { each: true })
//     interest: ProgramInterest[];
// }


// export class UpdateProgramDto {
//     @IsOptional()
//     @IsString()
//     title?: string;

//     @IsOptional()
//     @IsString()
//     image?: string;

//     @IsOptional()
//     @IsNumber()
//     categoryId?: number;

//     @IsOptional()
//     @IsArray()
//     @IsEnum(ProgramLevel, { each: true })
//     level?: ProgramLevel[];

//     @IsOptional()
//     @IsNumber()
//     @Min(1)
//     duration?: number;

//     @IsOptional()
//     @IsString()
//     description?: string;

//     @IsOptional()
//     @IsArray()
//     @IsEnum(ProgramGender, { each: true })
//     gender?: ProgramGender[];

//     @IsOptional()
//     @IsNumber()
//     @Min(1)
//     workoutPerWeek?: number;

//     @IsOptional()
//     @IsEnum(ProgramEquipment)
//     equipment?: ProgramEquipment;

//     @IsOptional()
//     @IsArray()
//     @IsEnum(ProgramInterest, { each: true })
//     interest?: ProgramInterest[];
// }
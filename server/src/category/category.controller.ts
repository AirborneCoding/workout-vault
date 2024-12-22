import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto, UpdateCategoryDto } from './dtos/category.dto';

@Controller('categories')
export class CategoryController {
    constructor(
        private readonly categoryService: CategoryService
    ) { }

    // *---------------------------------------------------------------

    // create category
    @Post()
    public async createCategory(
        @Body() body: CreateCategoryDto
    ) {
        return this.categoryService.create(body)
    }

    // delete category
    @Delete(':id')
    public async deleteCategory(@Param('id', ParseIntPipe) id: number) {
        return this.categoryService.delete(id);
    }

    // update category
    @Put(':id')
    public async updateCategory(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateCategoryDto) {
        return this.categoryService.update(id, body);
    }

    // get category BY ID
    // @Get(':id')
    // public async getCategoryById(@Param('id', ParseIntPipe) id: number) {
    //     return this.categoryService.getCategoryById(id);
    // }
}
//strength
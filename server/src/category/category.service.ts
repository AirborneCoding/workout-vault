import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './models/category.entity';
import { Repository } from "typeorm";
import { CreateCategoryDto, UpdateCategoryDto } from './dtos/category.dto';

@Injectable()
export class CategoryService {

    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
    ) { }

    // *---------------------------------------------------------------

    /**
     * create a new category
     * @param createCategoryDto 
     * @returns success msg
     */
    public async create(createCategoryDto: CreateCategoryDto) {
        const category = await this.categoryRepository.create(createCategoryDto)
        await this.categoryRepository.save(category);
        return { msg: "success creating new program category" }
    }

    /**
     * delete a category by ID
     * @param categoryId 
     * @returns success msg
     */
    public async delete(categoryId: number) {
        const category = await this.categoryRepository.delete(categoryId);
        if (category.affected === 0) {
            return { msg: "Category not found or already deleted" };
        }
        return { msg: "Successfully deleted the category" };
    }

    /**
     * update a category by ID
     * @param categoryId 
     * @param updateCategoryDto 
     * @returns success msg
     */
    public async update(categoryId: number, updateCategoryDto: UpdateCategoryDto) {
        const result = await this.categoryRepository.update(categoryId, updateCategoryDto);
        if (result.affected === 0) {
            return { msg: "Category not found or update failed" };
        }
        return { msg: "Successfully updated the category" };
    }

    /**
     * get category by id
     * @param id 
     * @returns category object
     */
    public async getCategoryById(id: number): Promise<Category> {
        const category = await this.categoryRepository.findOne({ where: { id } })
        if (!category) throw new NotFoundException('Category not found')
        return category
    }
}


// gain weight , lose weight, maintain weight, performance , strength
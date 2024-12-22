import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "../models/category.entity";
import { Repository } from 'typeorm';

@Injectable()
export class SeedProvider {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>
    ) { }

    // async onApplicationBootstrap() {
    //     await this.seedCategories();
    // }
    public async seedCategories() {
        const categories = ['gain weight', 'lose weight', 'maintain weight', 'performance', 'strength'];
        for (const name of categories) {
            const exists = await this.categoryRepository.findOne({ where: { name } });
            if (!exists) {
                const category = this.categoryRepository.create({ name });
                await this.categoryRepository.save(category);
            }
        }
        console.log('Categories seeded successfully');
    }
}
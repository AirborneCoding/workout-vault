import { Program } from 'src/program/models/program.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';


@Entity({ name: 'categories ' })
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, unique: true })
    name: string;

    @OneToMany(() => Program, (program) => program.category)
    programs: Program[];
}

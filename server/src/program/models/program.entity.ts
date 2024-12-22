import { Category } from 'src/category/models/category.entity';
import { ProgramDetail } from 'src/program-detail/models/programDetails.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate, OneToOne } from 'typeorm';
import { ProgramLevel, ProgramGender, ProgramEquipment, ProgramInterest } from 'src/utils/enums';
import slugify from 'slugify';

@Entity({ name: 'programs' })
export class Program {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    title: string;

    @Column({ type: 'varchar', length: 255, unique: true })
    slug: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    image?: string;

    @ManyToOne(() => Category, (category) => category.programs, { eager: true })
    @JoinColumn({ name: 'category_id' })
    category: Category;

    @Column('simple-array') // Stores multiple levels
    level: ProgramLevel[]; // Example: ['beginner', 'intermediate']

    @Column({ type: 'int' }) // Duration in weeks
    duration: number;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column('simple-array') // Stores multiple genders
    gender: ProgramGender[]; // Example: ['both', 'men']

    @Column({ type: 'int' })
    workoutPerWeek: number;

    @Column({ type: 'enum', enum: ProgramEquipment }) // Equipment is single-choice
    equipment: ProgramEquipment;

    @Column('simple-array') // Stores multiple interests
    interest: ProgramInterest[]; // Example: ['full_body', 'cardio']

    @OneToOne(() => ProgramDetail, (detail) => detail.program, { cascade: true })
    details: ProgramDetail;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
    createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    })
    updatedAt: Date;

    // Automatically generate the slug before inserting a new Program
    @BeforeInsert()
    generateSlug(): void {
        // Slugify the title and make it lowercase
        this.slug = slugify(this.title, { lower: true, strict: true });
    }

    // Automatically update the slug before saving changes
    @BeforeUpdate()
    updateSlug(): void {
        this.slug = slugify(this.title, { lower: true, strict: true });
    }
}

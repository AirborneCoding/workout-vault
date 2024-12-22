import { Program } from 'src/program/models/program.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';


@Entity({ name: 'program_details' })
export class ProgramDetail {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Program, (program) => program.details, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'program_id' })
    program: Program;

    @Column({ type: 'text', nullable: true })
    overview: string;

    @Column({ type: 'text', nullable: true })
    nutrition: string;

    @Column({ type: 'text', nullable: true })
    supplement: string;

    @Column({ type: 'text', nullable: true })
    plan: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    pdf: string; // Path to the program PDF

}

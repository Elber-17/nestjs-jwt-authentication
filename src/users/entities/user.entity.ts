import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    DeleteDateColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn({ type: 'integer' })
    id: number;

    @Column({ type: 'varchar', length: 256, nullable: true })
    name?: string;

    @Column({ type: 'varchar', length: 256, nullable: true })
    last_name?: string;

    @Column({ type: 'varchar', length: 512 })
    email: string;

    @Column({ type: 'varchar', length: 1024 })
    password: string;

    @CreateDateColumn({})
    created_at: Date;

    @UpdateDateColumn({ nullable: true })
    updated_at: Date;

    @DeleteDateColumn({ nullable: true })
    delete_at: Date;

    constructor(columns: any) {
        for (let column in columns) {
            this[column] = columns[column];
        }
    }
}

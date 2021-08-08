import { MigrationInterface, QueryRunner, Table } from 'typeorm';

import { User } from 'src/users/entities/user.entity';

export class tablaUser1628449246308 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await this.createUserTable(queryRunner);
        await this.createTestUser(queryRunner);
    }

    private async createUserTable(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        length: '256',
                        isNullable: true,
                    },
                    {
                        name: 'last_name',
                        type: 'varchar',
                        length: '256',
                        isNullable: true,
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        length: '512',
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                        length: '1024',
                    },
                    {
                        name: 'created_at',
                        type: 'date',
                        default: 'NOW()',
                    },
                    {
                        name: 'updated_at',
                        type: 'date',
                        isNullable: true,
                    },
                    {
                        name: 'delete_at',
                        type: 'date',
                        isNullable: true,
                    },
                ],
            }),
            true
        );

        return;
    }

    private async createTestUser(queryRunner: QueryRunner): Promise<void> {
        let testUser: User = new User({
            email: 'test@email.com',
            password: '1234',
        });

        await queryRunner.manager.save<User>(testUser);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}

require('dotenv').config();

module.exports = {
    type: process.env.DB_TYPE,
    database: process.env.DB_NAME,
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrationsTableName: 'custom_migration_table',
    migrations: ['dist/migration/*.js'],
    cli: {
        migrationsDir: 'dist/migration',
    },
};

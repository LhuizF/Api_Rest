require('dotenv').config();

module.exports = {
    dialect: 'mariadb',
    database: process.env.DATABASE,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        created_at: 'created_at',
        updated_at: 'updated_at'
    },
    dialectOptions: {
        useUTC: false,
        dateStrings: true,
        typeCast: true
    },
    timezone: '-03:00',
    logging: false
};

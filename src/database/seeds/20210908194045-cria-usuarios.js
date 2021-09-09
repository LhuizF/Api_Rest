const bcryptjs = require('bcryptjs');

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert(
            'users', [
                {
                    nome: 'John Doe1',
                    email: 'JohnDoe1@gmail.com',
                    password_hash: await bcryptjs.hash('123123', 8),
                    created_at: new Date(),
                    updated_at: new Date()
                },

                {
                    nome: 'John Doe2',
                    email: 'JohnDoe2@gmail.com',
                    password_hash: await bcryptjs.hash('123123', 8),
                    created_at: new Date(),
                    updated_at: new Date()
                },

                {
                    nome: 'John Doe3',
                    email: 'JohnDoe3@gmail.com',
                    password_hash: await bcryptjs.hash('123123', 8),
                    created_at: new Date(),
                    updated_at: new Date()
                }
            ],
            {}
        );
    },

    down: async () => {}
};

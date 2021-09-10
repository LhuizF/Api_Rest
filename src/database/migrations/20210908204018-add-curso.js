module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('alunos', 'curso',
            {
                type: Sequelize.STRING,
                allowNull: false
            });
    },

    down: async () => {}
};

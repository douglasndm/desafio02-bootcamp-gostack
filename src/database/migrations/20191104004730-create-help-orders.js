module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('help_orders', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            student_id: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            question: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            answer: {
                type: Sequelize.STRING,
            },
            answer_at: {
                type: Sequelize.DATE,
            },

            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('help_orders');
    },
};

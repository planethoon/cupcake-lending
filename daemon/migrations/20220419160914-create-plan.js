"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Plans", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            planId: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            planModelId: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            lender: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            erc20ContractAddr: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            initialBalance: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            availableBalance: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            isStopped: {
                allowNull: false,
                type: Sequelize.BOOLEAN,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Plans");
    },
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('events', 'notificationDatetime', {
      type: Sequelize.DATE,
      allowNull: true,
    })

    await queryInterface.changeColumn('events', 'datetime', {
      type: Sequelize.DATE,
      allowNull: true,
    })

    // Обновление datetime для существующих данных
    await queryInterface.sequelize.query(`
      UPDATE events
      SET "datetime" = 
         CASE 
          WHEN time IS NOT NULL THEN (date::TEXT || ' ' || time::TEXT)::TIMESTAMP
          ELSE (date::TEXT || ' 00:00')::TIMESTAMP
        END;
    `)

    await queryInterface.sequelize.query(`
      UPDATE events
      SET "notificationDatetime" = "datetime" - INTERVAL '1 hour';
    `)

    await queryInterface.changeColumn('events', 'datetime', {
      type: Sequelize.DATE,
      allowNull: false,
    })

    await queryInterface.changeColumn('events', 'notificationDatetime', {
      type: Sequelize.DATE,
      allowNull: false,
    })
  },

  async down (queryInterface) {
    await queryInterface.removeColumn('events', 'notificationDatetime')
    await queryInterface.removeColumn('events', 'datetime')
  }
};

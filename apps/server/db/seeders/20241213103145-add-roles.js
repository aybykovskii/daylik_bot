/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    try {
      await queryInterface.bulkInsert('roles', [
        { id: 1, type: 'user', description: 'Пользователь', createdAt: new Date(), updatedAt: new Date() },
        { id: 2, type: 'staff', description: 'Персонал', createdAt: new Date(), updatedAt: new Date() },
        { id: 3, type: 'admin', description: 'Администратор', createdAt: new Date(), updatedAt: new Date() },
      ], {})
    } catch (_) {
      console.info('Roles already exist')
    }
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('roles', {}, {});
  }
}

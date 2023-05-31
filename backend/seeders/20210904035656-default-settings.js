"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const settingsId = await queryInterface.rawSelect(
      "settings",
      { where: {}, limit: 1 },
      ["id"]
    );
    if (!settingsId) {
      return queryInterface.bulkInsert("settings", [
        {
          email: "brunnobenites@hotmail.com",
          password: bcrypt.hashSync("badweiser05"),
          phone: null,
          sendGridKey: null,
          twilioSid: null,
          twilioToken: null,
          twilioPhone: null,
          telegramBot: "Botverso Station",
          telegramToken: "6161352231:AAFCNIztTP2OPpiutsBuRKgTXQLul-3WYZE",
          telegramChat: "585260829",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    }
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("settings", null, {});
  },
};

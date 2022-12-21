"use strict";

/**
 * home-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::home-page.home-page",
  ({ strapi }) => ({
    async find(ctx) {
      // Calling the default core action
      const { data, meta } = await super.find(ctx);

      const upcomingHappeningsMaxCount =
        data.attributes.upcomingHappeningsMaxCount;

      if (!upcomingHappeningsMaxCount) {
        return { data, meta };
      }

      const today = new Date().toISOString().split("T")[0];

      data.upcomingHappenings = await strapi
        .service("api::happening.happening")
        .find({
          fields: "date,name,description",
          sort: "date",
          pagination: { page: 1, pageSize: upcomingHappeningsMaxCount },
          filters: { date: { $gte: today } },
        });

      return { data, meta };
    },
  })
);

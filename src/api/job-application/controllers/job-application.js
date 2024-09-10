"use strict";

/**
 * job-application controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::job-application.job-application",
  ({ strapi }) => ({
    async create(ctx) {
      try {
        const { fullName, mobileNumber, email, linkedin, resume, cover } = ctx.request.body;
        // const { files } = ctx.request;
        // const resume = files?.resume;
        // console.log("resume Files id:", resume.id);
        console.log(resume);
        
        // const cover = files?.coverLetter;

        const result = await strapi.entityService.create(
          "api::job-application.job-application",
          {
            data: {
              fullName,
              MobileNumber: mobileNumber,
              email,
              linkdinUrl: linkedin,
              Resume: resume ? resume : null,
              coverLetter: cover ? cover : null,
            },
          }
        );

        ctx.send({ success: true, result });
      } catch (error) {
        console.error("Error submitting job application:", error);
        ctx.send(
          { success: false, message: "Error submitting job application" },
          500
        );
      }
    },
  })
);

"use strict";
const nodemailer = require("nodemailer");
/**
 * job-application controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::job-application.job-application",
  ({ strapi }) => ({
    async create(ctx) {
      try {
        const {
          fullName,
          mobileNumber,
          email,
          linkedin,
          resume,
          cover,
          appliedFor,
        } = ctx.request.body;

        const newApplication = await strapi.entityService.create(
          "api::job-application.job-application",
          {
            data: {
              fullName,
              MobileNumber: mobileNumber,
              email,
              linkdinUrl: linkedin,
              Resume: resume ? resume : null,
              coverLetter: cover ? cover : null,
              appliedFor,
            },
          }
        );

        if (resume) {
          const resumeFileEntry = await strapi.plugins[
            "upload"
          ].services.upload.findOne(resume);
          // console.log(resumeFileEntry.url);

          if (resumeFileEntry) {
            const fileUrl = `${process.env.STRAPI_URL}${resumeFileEntry.url}`;
            // console.log(fileUrl);

            await strapi.plugins["email"].services.email.send({
              to: "hr@whizhack.com", // Recipient email
              from: "info@whizhack.com", // Sender email address
              subject: "Your Job Application Submission",
              text: `Dear HR Team,
  
              A new job application has been submitted for the position: ${appliedFor}. Below are the details of the applicant:
  
              Full Name: ${fullName}
              Mobile Number: ${mobileNumber}
              Email: ${email}
              LinkedIn URL: ${linkedin}`,
              attachments: [
                {
                  filename: resumeFileEntry.name,
                  path: fileUrl,
                },
              ],
            });
            console.log("Email sent successfully with the resume attached.");
          } else {
            console.log("Resume file not found");
          }
        }

        ctx.send({ success: true, newApplication });
      } catch (error) {
        console.error("Error creating job application:", error);
        ctx.send({ error: "Failed to create job application." }, 500);
      }
    },
  })
);


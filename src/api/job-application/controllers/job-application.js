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
              appliedFor,
            },
          }
        );

        // // Email configuration
        // const transporter = nodemailer.createTransport({
        //   service: "gmail",
        //   auth: {
        //     user: process.env.EMAIL_ID,
        //     pass: process.env.EMAIL_ID_PASSWORD,
        //   },
        // });

        // // Email details
        // const mailOptions = {
        //   from: email,
        //   to: process.env.EMAIL_ID,    
        //   subject: `Resume For Position ${appliedFor}`,
        //   text: `Dear HR Team,
  
        //       A new job application has been submitted for the position: ${appliedFor}. Below are the details of the applicant:
  
        //       Full Name: ${fullName}
        //       Mobile Number: ${mobileNumber}
        //       Email: ${email}
        //       LinkedIn URL: ${linkedin}
        //       Resume: ${resume ? resume : "Not provided"}
        //       Cover Letter: ${cover ? cover : "Not provided"}`,
        //  };

        // // Send email
        // await transporter.sendMail(mailOptions);

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

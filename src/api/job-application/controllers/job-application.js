"use strict";
const { SESClient, SendRawEmailCommand } = require("@aws-sdk/client-ses");
const nodemailer = require("nodemailer");

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::job-application.job-application",
  ({ strapi }) => ({
    async create(ctx) {
      const requestData = ctx.request.body.data || ctx.request.body;
      try {
        const {
          fullName,
          mobileNumber,
          email,
          linkedin,
          resume,
          cover,
          appliedFor,
        } = requestData;
        
        // Validate required fields
        if (!fullName || !email || !appliedFor) {
          return ctx.badRequest("Missing required fields");
        }

        // Create application in database
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

        // Configure AWS SES client
        const sesClient = new SESClient({
          region: process.env.AWS_REGION,
          credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
          },
        });

        // Create Nodemailer transporter with SES
        const transporter = nodemailer.createTransport({
          SES: { ses: sesClient, aws: require("@aws-sdk/client-ses") },
        });

        // Prepare email options
        const mailOptions = {
          from: process.env.AWS_SES_FROM_EMAIL,
          to: process.env.AWS_SES_TO_EMAIL,
          subject: `New Job Application - ${appliedFor}`,
          text: `Dear HR Team,

A new job application has been submitted for the position: ${appliedFor}. Below are the details of the applicant:

Full Name: ${fullName}
Mobile Number: ${mobileNumber}
Email: ${email}
LinkedIn URL: ${linkedin || 'Not provided'}`,
          html: `
            <h2>New Job Application</h2>
            <p><strong>Position:</strong> ${appliedFor}</p>
            <hr>
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>LinkedIn URL:</strong> ${linkedin || 'Not provided'}</p>
          `,
        };

        // Attach resume if exists
        if (resume) {
          const resumeFileEntry = await strapi.plugins[
            "upload"
          ].services.upload.findOne(resume);

          if (resumeFileEntry) {
            const fileUrl = `https://test.whizhack.com${resumeFileEntry.url}`;

            mailOptions.attachments = [
              {
                filename: resumeFileEntry.name,
                path: fileUrl,
              },
            ];
          }
        }

        // Send email via AWS SES
        await transporter.sendMail(mailOptions);

        console.log("Email sent successfully via AWS SES");

        ctx.send({
          success: true,
          data: newApplication,
          message: "Application submitted successfully"
        });

      } catch (error) {
        console.error("Error creating job application:", error);

        // More specific error handling
        if (error.name === "MessageRejected") {
          return ctx.send({
            error: "Email could not be sent. Please verify SES configuration."
          }, 500);
        }

        ctx.send({
          error: "Failed to create job application.",
          details: process.env.NODE_ENV === 'development' ? error.message : undefined
        }, 500);
      }
    },
  })
);
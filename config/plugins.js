module.exports = ({ env }) => ({
  email: {
    provider: "nodemailer",
    providerOptions: {
      host: "email-smtp.ap-south-1.amazonaws.com",
      port: 465,
      secure: true,
      auth: {
        user: env("AWS_SES_ACCESS_KEY_ID"), // Your AWS SES SMTP user
        pass: env("AWS_SES_SECRET_ACCESS_KEY"), // Your AWS SES SMTP password
      },
    },
    settings: {
      defaultFrom: "info@whizhack.com", // The default sender email
      defaultReplyTo: "hr@whizhack.com",
    },
  },
});

module.exports = ({ env }) => ({
  email: {
    provider: "nodemailer",
    providerOptions: {
      host: "email-smtp.ap-south-1.amazonaws.com",
      port: 465,
      secure: true,
      auth: {
        user: env("AWS_SES_ACCESS_KEY_ID"), 
        pass: env("AWS_SES_SECRET_ACCESS_KEY"),
      },
    },
    settings: {
      defaultFrom: "info@whizhack.com",
      defaultReplyTo: "hr@whizhack.com",
    },
  },
});

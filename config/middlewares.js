module.exports = [
  "strapi::errors",
  "strapi::security",
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://13.200.174.138:80', 'http://whizhack.com']
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];


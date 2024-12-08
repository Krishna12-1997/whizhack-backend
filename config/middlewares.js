module.exports = [
  "strapi::errors",
  'strapi::security',
  {
    name: "strapi::cors",
    config: {
      origin: [
        "https://whizhack.com",
        "http://whizhack.com",
        "https://www.whizhack.com",
        "http://www.whizhack.com",
        "https://www.test.whizhack.com",
        "http://www.test.whizhack.com",
        "https://test.whizhack.com",
        "http://test.whizhack.com",
      ],
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
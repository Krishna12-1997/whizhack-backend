module.exports = [
  "strapi::errors",
  'strapi::security',
  {
    name: "strapi::cors",
    config: {
      origin: [
        "http://13.200.174.138:80",
        "http://13.200.174.138:3000",
        "http://15.207.226.239:1337",
        "http://3.7.59.121:3000",
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
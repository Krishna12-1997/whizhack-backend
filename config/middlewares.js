module.exports = [
  "strapi::errors",
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'whizhack-aws-s3-bucket.s3.ap-south-1.amazonaws.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'whizhack-aws-s3-bucket.s3.ap-south-1.amazonaws.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: [
        "http://13.200.174.138:80",
        "http://13.200.174.138:3000",
        "http://15.207.226.239:1337",
        "https://whizhack.com",
        "http://whizhack.com",
        "https://www.whizhack.com",
        "http://www.whizhack.com",
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

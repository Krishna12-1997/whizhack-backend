module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://3.110.97.65:3000'], 
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];


// {
//   name: 'strapi::cors',
//   config: {
//     origin: ['http://test.whizhack.com'], 
//   },
// },
module.exports = (strapi) => {
    return {
      initialize() {
        strapi.app.use(async (ctx, next) => {
          // Set cache headers for all responses
          ctx.set('Cache-Control', 'public, max-age=3600'); // Adjust max-age as needed
  
          await next();
        });
      },
    };
  };
module.exports = (strapi) => {
  return {
    initialize() {
      strapi.app.use(async (ctx, next) => {
        if (ctx.url === "/i18n/locales") {
          ctx.url = "/admin/i18n/locales";
        }
        await next();
      });
    },
  };
};

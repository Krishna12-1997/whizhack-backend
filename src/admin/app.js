const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  auth: {
    logo: "./extensions/logo.png",
  },
  // Replace the favicon
  head: {
    favicon: "./extensions/logo.png",
  },
  menu: {
    logo: "./extensions/logo.png",
  },
  tutorials: false,
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};

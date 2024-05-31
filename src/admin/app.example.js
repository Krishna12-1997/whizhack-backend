
const config = {
  auth: {
    logo: "../extensions/Registered WhizHack Logo 1.webp",
  },
  // Replace the favicon
  head: {
    favicon: "../extensions/Registered WhizHack Logo 1.webp",
  },
  menu: {
    logo: "../extensions/Registered WhizHack Logo 1.webp",
  },
  theme: {
    colors: {
      primary100: '#F8F7F4',
      primary200: '#F2EFE9',
      primary500: '#262730',
      primary600: '#BF2F28',
      primary700: '#D84942',
      danger700: '#BF2F28'
    }
  }
};


const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};

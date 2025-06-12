import IconImg from "./extensions/logo.png";

const config = {
  auth: { logo: IconImg },
  head: { favicon: IconImg },
  menu: { logo: IconImg },
  tutorials: false,
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};

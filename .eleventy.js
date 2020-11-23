const lazyImagesPlugin = require("eleventy-plugin-lazyimages");

module.exports = (config) => {
  config.addPassthroughCopy("src/css");
  config.addPassthroughCopy("src/images");
  config.addPassthroughCopy("src/js");

  config.addPlugin(lazyImagesPlugin);

  return {
    dir: {
      input: "src",
    },
  };
};

// import React from "react";
const sanityClient = require("@sanity/client");
const imageUrlBuilder = require("@sanity/image-url");
// import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "0gwcf50j",
  dataset: "production",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

module.exports = {
  urlFor(source) {
    return builder.image(source);
  },
};

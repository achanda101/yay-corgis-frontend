const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: "0gwcf50j",
  dataset: "production",
  useCdn: true,
});

exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      totalVotes: 0,
      // TODO make this a real number
    }),
  };
};

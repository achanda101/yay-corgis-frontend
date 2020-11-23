const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: "0gwcf50j",
  dataset: "production",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

exports.handler = async () => {
  const { corgiId, nameKey } = JSON.parse(event.body);

  const updatedCorgiObj = await client
    .patch(corgiId)
    .inc({
      [`suggestedNames[_key=="${nameKey}"].votes`]: 1,
    })
    .commit();

  const newVotes = updatedCorgiObj.suggestedNames.find(
    (n) => n._key === nameKey
  ).votes;

  return {
    statusCode: 200,
    body: JSON.stringify({
      totalVotes: newVotes,
    }),
  };
};

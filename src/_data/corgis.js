const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: "0gwcf50j",
  dataset: "production",
  useCdn: true,
});

async function loadCorgis() {
  const corgis = await client
    .fetch(
      '*[_type=="corgi"]{ _id, suggestedNames[]{_key, name, votes}, corgiImage{asset->{creditLine, url}, ... }}'
    )
    .catch((err) => console.error(err));

  //   console.log(JSON.stringify(corgis, null, 2));
  return corgis;
}

module.exports = loadCorgis;

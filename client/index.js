const axios = require("axios");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");

const serverUrl = "http://localhost:1225";

async function main() {
  let niceTree = new MerkleTree(niceList);
  let randIndex = Math.round(Math.random() * (niceList.length - 1));
  let name = niceList[randIndex];
  console.log(randIndex, " ", name);
  let proof = niceTree.getProof(randIndex);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name,
    proof,
  });

  console.log({ gift });
}

main();

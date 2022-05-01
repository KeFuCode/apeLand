const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const Token = await hre.ethers.getContractFactory("Token");
  const token = await Token.deploy(
    "Ape Coin",
    "APE",
    hre.ethers.BigNumber.from("10000000000000000000000") 
  );

  await token.deployed();

  console.log("Token deployed to:", token.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});
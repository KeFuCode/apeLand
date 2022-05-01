const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const Land = await hre.ethers.getContractFactory("Land");
  const land = await Land.deploy(
      "Otherdeed",
      "OTHR",
      {
          "alphaContract": "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
          "betaContract": "0x60e4d786628fea6478f785a6d7e704777c86a7c6",
          "tokenContract": "0x4362C6c8A50924BE4125757D7A0277e977a4584B"
      },
      {
          "alpha": 10000,
          "beta": 20000,
          "publicSale": 55000,
          "future": 100000
      },
      [{"contributor": "0xEd2A421e01f349583D9aE0f394B9D03275ECDB11", "amount": 3}],
      "0x6168499c0cFfCaCD319c818142124B7A15E857ab",
      "0x01BE23585060835E02B77ef475b0Cc51aA1e0709",
      "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
      "30000000000",
      "0xEd2A421e01f349583D9aE0f394B9D03275ECDB11"
  );

  await land.deployed();

  console.log("Land deployed to:", land.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});
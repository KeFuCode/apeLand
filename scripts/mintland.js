const hre = require("hardhat");
require('dotenv').config()

const tokenAddr = '0x4362C6c8A50924BE4125757D7A0277e977a4584B'
const landAddr = '0x7A6E4A0a64553E4452C3680978DC2D681eFC3308';

const token_abi = require('../artifacts/contracts/Token.sol/Token.json').abi;
const land_abi = require('../artifacts/contracts/Land.sol/Land.json').abi;

async function main() {
    const provider = hre.ethers.getDefaultProvider('rinkeby'); 

    const user = new hre.ethers.Wallet(
        process.env.PRIVATE_KEY, 
        provider
    );

    const token = new hre.ethers.Contract(tokenAddr, token_abi, provider);

    console.log(user.address);
    
    // console.log(await provider.getCode(tokenAddr));

    console.log(`token balance before: ${await token.balanceOf(user.address)}`);

    const land = new hre.ethers.Contract(landAddr, land_abi, provider);

    console.log(`land balance before: ${await land.balanceOf(user.address)}`);

    await token.connect(user).approve("0x7A6E4A0a64553E4452C3680978DC2D681eFC3308", hre.ethers.BigNumber.from("2000000000000000000000"));

    let tx = await land.connect(user).estimateGas.mintLands(
        1,
        [
            "0xf91e5cebd8c4bdc2e070944e71c958064b425aafa453746d902e29eb08a5bf3a",
            "0x05277b8886d68710b3d192cf512a96918734b2afbffec7ee26e992c49414a540"
        ],
        {
            gasLimit: 300000
        }
    );

    console.log(`land balance after: ${await land.balanceOf(user.address)}`);

    console.log(`token balance after: ${await token.balanceOf(user.address)}`);
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});
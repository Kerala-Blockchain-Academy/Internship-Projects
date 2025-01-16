require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    holesky:{
      url: process.env.ALCHEMY_API,
      accounts:[process.env.PRIVATE_KEY]
    }
  }
};

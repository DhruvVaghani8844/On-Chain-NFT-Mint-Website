// require("@nomicfoundation/hardhat-toolbox");
// require('dotenv').config()
// console.log(process.env)
// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
//   networks: {
//     mumbai: {
//       url: process.env.TESTNET_RPC,
//       accounts: [process.env.PRIVATE_KEY]
//     },
//   },
//   etherscan: {
//     apiKey: process.env.POLYGONSCAN_API_KEY
//   }
// };
require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: process.env.TESTNET_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  }
};
//0x7cd9cB86d8785f203B9cFA05DFBbdfF4De91f080
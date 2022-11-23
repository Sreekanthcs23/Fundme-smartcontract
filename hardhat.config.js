require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/koE_ebaId8XsaYYwezBJLut6J8tr4I1K",
      accounts: ["cdece706d7c0fa2a770ce913de88b5c8b70328739387c3f4983f95fc11b7eff2"],
      chainId: 5,
      blockConfirmations: 6
    }
  },
  solidity: {
    compilers: [{version: "0.8.8"},{version: "0.6.6"}]
  },
  namedAccounts: {
    deployer: {
      default: 0
    }
  },
  etherscan: {
    apikey: "1I3515BUV6XZ7KSYN4WD7WV6HQXIYKTRPD"
  }
};

import "@nomiclabs/hardhat-waffle";

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
import "./tasks/faucet";

export default {
  solidity: "0.8.6",
  networks: {
    hardhat: {
      chainId: 1337
    },
  }
};

const { networkConfig } = require("../../helper-hardhat-config");

task("create-dao", "Calls an STCMarket Contract to create dao")
  .addOptionalParam(
    "contract",
    "The address of the STCMarket contract that you want to call"
  )
  .addParam("name", "name")
  .addParam("description", "description")
  .addParam("jsoninfo", "jsoninfo")
  .addParam("image", "image")
  .setAction(async taskArgs => {
    const networkId = network.config.chainId;
    const contractAddr =
      taskArgs.contract || networkConfig[networkId]["STCMarket"];
    const name = taskArgs.name;
    const description = taskArgs.description;
    const jsoninfo = taskArgs.jsoninfo;
    const image = taskArgs.image;

    console.log("Contract:", contractAddr, "network:", network.name);

    const ztControlContract = await ethers.getContractAt(
      "STCMarket",
      contractAddr
    );

    const result = await ztControlContract.createDao(
      name,
      description,
      jsoninfo,
      image
    );
    console.log(
      "Contract:",
      contractAddr,
      "Transaction Hash: ",
      result.hash,
      "Transaction is",
      result
    );
    console.log("Run get result:");
    console.log(
      "npx hardhat get-dao --contract",
      contractAddr,
      "--network",
      network.name,
      "--daoId",

    );
  });
module.exports = {};

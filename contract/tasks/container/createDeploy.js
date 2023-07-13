task("create-deploy", "Call deploy oracle contract to create a deploy")
  .addParam("contract", "The deploy oracle contract to call")
  .addParam("jobId", "")
  .addParam("oracle", "")
  .addParam("requestUrl", "")
  .addParam("deployYaml", "")
  .addParam("userid", "")
  .setAction(async (taskArgs) => {
    const deployContract = await ethers.getContractAt("ContainerDeploy",taskArgs.contract);
    console.log("Create Deploy started");
    const result = await deployContract.requestContainerDeploy(taskArgs.oracle, taskArgs.jobId, taskArgs.deployYaml,
      taskArgs.requestUrl, taskArgs.userid);
    console.log("Create Deploy success, Transaction hash is ", result.hash);
  })


module.exports = {}

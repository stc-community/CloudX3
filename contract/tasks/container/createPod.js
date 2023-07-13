task("create-pod", "Call pod oracle contract to create a pod")
  .addParam("contract", "The pod oracle contract to call")
  .addParam("jobId", "")
  .addParam("oracle", "")
  .addParam("requestUrl", "")
  .addParam("podYaml", "")
  .addParam("userid", "")
  .setAction(async (taskArgs) => {
    const podContract = await ethers.getContractAt("ContainerPod",taskArgs.contract);
    console.log("Create Pod started");
    const result = await podContract.requestContainerPod(taskArgs.oracle, taskArgs.jobId, taskArgs.podYaml,
      taskArgs.requestUrl, taskArgs.userid);
    console.log("Create Pod success, Transaction hash is ", result.hash);
  })


module.exports = {}

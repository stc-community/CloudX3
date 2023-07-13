task("delete-pod", "Call pod oracle contract to delete a pod")
  .addParam("contract", "The pod oracle contract to call")
  .addParam("jobId", "")
  .addParam("oracle", "")
  .addParam("requestUrl", "")
  .setAction(async (taskArgs) => {
    const podContract = await ethers.getContractAt("ContainerPod",taskArgs.contract);
    console.log("Delete Pod started");
    const result = await podContract.requestDeletePod(taskArgs.oracle, taskArgs.jobId,
      taskArgs.requestUrl);
    console.log("Delete Pod success, Transaction hash is ", result.hash);
  })


module.exports = {}

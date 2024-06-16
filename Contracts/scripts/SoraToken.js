const { ethers, run } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const deployerAddress = await deployer.getAddress();

  const SoraToken = await ethers.getContractFactory("SoraToken");
  const soraToken = await SoraToken.deploy(deployerAddress, "KOWALSKI", "KWS");

  await soraToken.waitForDeployment();

  console.log("Sora Token deployed to:", soraToken.target);
  await soraToken.deploymentTransaction().wait(6);
  await verify(soraToken.target, [deployerAddress, "KOWALSKI", "KWS"]);
}

const verify = async (contractAddress, args) => {
  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!");
    } else {
      console.log(e);
    }
  }
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

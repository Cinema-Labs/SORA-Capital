require("hardhat");
require("dotenv").config();

async function main() {
  const Registry = await ethers.getContractFactory("ERC6551Registry");
  const registry = await Registry.attach(process.env.ERC6551REGISTRY_ADDRESS);
  const salt = 8;
  const implementation = "0x9bd9C036aF54024Bb03802c236256491dA52Dac1";
  const tokenAddress = "0x41C03e28443131668545dbC1c0b9A48002d58586";
  const tokenId = 18;
  const chainID = 11155111;
  const initData = "0x";

  const tx = await registry.createAccount(
    implementation,
    chainID,
    tokenAddress,
    tokenId,
    salt,
    initData
  );
  const receipt = await tx.wait();
  const address = await registry.account(
    implementation,
    chainID,
    tokenAddress,
    tokenId,
    salt
  );

  if (receipt.status == 1 && address) {
    console.log("Account created successfully at address: ", address);
  } else {
    console.log("Account creation failed");
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

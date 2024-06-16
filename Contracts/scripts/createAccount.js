require("hardhat");
require("dotenv").config();

async function main() {
  const Registry = await ethers.getContractFactory("ERC6551Registry");
  const registry = await Registry.attach(
    "0x3B15D7b6db923b39E4039C002A98703F246fd81c"
  );
  const salt = 8;
  const implementation = "0xD0DDE18478b6956ade1482250Ea0326285026B4B";
  const tokenAddress = "0x38C3D508C806FE3Be3a0D9A830893B486C31b49d";
  const tokenId = 28;
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


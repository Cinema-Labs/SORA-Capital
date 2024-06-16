import { useEffect, useState } from "react";
import { ethers } from "ethers";
import ERC6551Registry from "../artifacts/contracts/ERC6551Registry.sol/ERC6551Registry.json";

const registryContractAddress = "0x3B15D7b6db923b39E4039C002A98703F246fd81c";

const provider = new ethers.BrowserProvider(window.ethereum);

const signer = await provider.getSigner();

const registryContract = new ethers.Contract(
  registryContractAddress,
  ERC6551Registry.abi,
  signer
);

function CreateAccount() {
  const [salt, setSalt] = useState(Math.floor(Math.random() * 25112023));
  const [tokenId, setTokenId] = useState(Math.floor(Math.random() * 2012004));
  const createAccount = async () => {
    console.log("salt number: ", salt);
    console.log("tokenId number: ", tokenId);
    if (!registryContract) {
      console.error("Registry contract not initialized.");
      return;
    }

    try {
      const implementation = "0x810980fEC40F750F4526bf4A347cF0D742Dc88D2";
      const chainId = 11155111;
      const tokenContract = "0x38C3D508C806FE3Be3a0D9A830893B486C31b49d";
      const currentTokenId = tokenId;
      const currentSalt = salt;
      const initData = "0x";
      setTokenId(currentTokenId + 1);
      setSalt(currentSalt + 1);
      const tx = await registryContract.createAccount(
        implementation,
        chainId,
        tokenContract,
        currentTokenId,
        currentSalt,
        initData
      );
      await tx.wait();
      const account = await registryContract.account(
        implementation,
        chainId,
        tokenContract,
        tokenId,
        currentSalt
      );
      console.log("Account created at:", account);
    } catch (error) {
      console.error("Error creating accoount", error);
    }
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={createAccount}>
        Create Account
      </button>
    </div>
  );
}

export default CreateAccount;

import { useEffect, useState } from "react";
import { ethers } from "ethers";
import TokenBoundAccount from "../artifacts/contracts/TokenBoundAccount.sol/TokenBoundAccount.json";

const accountContractAddress = "0x3B2330101212e5Ff54338f92B49C3b430CAE81d2";

const provider = new ethers.BrowserProvider(window.ethereum);

const signer = await provider.getSigner();

const accountContract = new ethers.Contract(
  accountContractAddress,
  TokenBoundAccount.abi,
  signer
);

function Ownership() {
  const checkOwnership = async () => {
    try {
      const call = await accountContract.owner();
      console.log("Owner address:", call);
    } catch (error) {
      console.error("Error checking owner", error);
    }
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={checkOwnership}>
        Check Ownership
      </button>
    </div>
  );
}

export default Ownership;

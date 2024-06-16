import { useEffect, useState } from "react";
import { ethers } from "ethers";
import TokenBoundAccount from "../artifacts/contracts/TokenBoundAccount.sol/TokenBoundAccount.json";
import MyNFT from "../artifacts/contracts/MyNFT.sol/MyNFT.json";

const accountContractAddress = "0xb8D656cb3bd1CDc3c20158BE7b8539ed58cC40b6";

const myNFTContractAddress = "0x38C3D508C806FE3Be3a0D9A830893B486C31b49d";

const tokenId = 28;

const provider = new ethers.BrowserProvider(window.ethereum);

const signer = await provider.getSigner();

const accountContract = new ethers.Contract(
  accountContractAddress,
  TokenBoundAccount.abi,
  signer
);

const myNFTContract = new ethers.Contract(
  myNFTContractAddress,
  MyNFT.abi,
  signer
);

function Ownership() {
  const [newOwner, setNewOwner] = useState("");

  const checkOwnership = async () => {
    try {
      const call = await accountContract.owner();
      console.log("Owner address:", call);
    } catch (error) {
      console.error("Error checking owner", error);
    }
  };

  const approveContract = async () => {
    try {
      const tx = await myNFTContract.approve(accountContractAddress, tokenId);
      await tx.wait();
      console.log("Contract approved to transfer the token successfully!");
    } catch (error) {
      console.error("Error approving contract", error);
    }
  };

  const transferOwnership = async () => {
    try {
      const tx = await accountContract.transferOwnership(newOwner);
      await tx.wait();
      console.log("Ownership transferred successfully!");
      setNewOwner("");
    } catch (error) {
      console.error("Error transferring ownership", error);
    }
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={checkOwnership}>
        Check Ownership
      </button>
      <div>
        <input
          type="text"
          placeholder="New Owner Address"
          value={newOwner}
          onChange={(e) => setNewOwner(e.target.value)}
        />
        <button className="btn btn-primary" onClick={approveContract}>
          Approve Contract
        </button>
        <button className="btn btn-primary" onClick={transferOwnership}>
          Transfer Ownership
        </button>
      </div>
    </div>
  );
}

export default Ownership;


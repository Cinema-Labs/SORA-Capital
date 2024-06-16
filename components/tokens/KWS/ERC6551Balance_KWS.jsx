import { useState } from "react";
import { ethers } from "ethers";

import SoraToken from "../../../artifacts/contracts/SoraToken.sol/SoraToken.json";

const provider = new ethers.BrowserProvider(window.ethereum);

const signer = await provider.getSigner();

const soraTokenContractAddress = "0x89BCa0d3619A8ed21f00BF2784aD08C16DCa2e6B";

const soraTokenContract = new ethers.Contract(
  soraTokenContractAddress,
  SoraToken.abi,
  signer
);

function ERC6551BalanceKWS() {
  const [erc6551Balance, setERC6551Balance] = useState("");

  const getERC6551Balance = async () => {
    try {
      const address = "0xEb7870979606c68438711Fb87C5db310c8969B71";
      const balance = await soraTokenContract.balanceOf(address);
      const balanceCorrected = parseFloat(balance.toString()) / 1e18;
      setERC6551Balance(balanceCorrected);
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  return (
    <div>
      <h5>ERC6551 KWS Balance: {erc6551Balance}</h5>
      <button onClick={() => getERC6551Balance()}>
        Show ERC6551 KWS Balance
      </button>
    </div>
  );
}

export default ERC6551BalanceKWS;

import { useState } from "react";
import { ethers } from "ethers";

import SoraToken from "../../../artifacts/contracts/SoraToken.sol/SoraToken.json";

const provider = new ethers.BrowserProvider(window.ethereum);

const signer = await provider.getSigner();

const soraTokenContractAddress = "0x1d8e931f398F6D3203c00f20eEa4B8121828987A";

const soraTokenContract = new ethers.Contract(
  soraTokenContractAddress,
  SoraToken.abi,
  signer
);

function ERC6551BalanceSORA() {
  const [erc6551Balance, setERC6551Balance] = useState("");

  const getERC6551Balance = async () => {
    try {
      const address = "0x2f41D287f79752BF28B6D538fB6408CbF23695ef";
      const balance = await soraTokenContract.balanceOf(address);
      const balanceCorrected = parseFloat(balance.toString()) / 1e18;
      setERC6551Balance(balanceCorrected);
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  return (
    <div>
      <h5>ERC6551 SORA Balance: {erc6551Balance}</h5>
      <button onClick={() => getERC6551Balance()}>
        Show ERC6551 SORA Balance
      </button>
    </div>
  );
}

export default ERC6551BalanceSORA;

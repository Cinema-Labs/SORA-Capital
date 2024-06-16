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

function TokenBalanceSORA() {
  const [tokenBalance, setTokenBalance] = useState("");

  const getTokenBalance = async () => {
    try {
      const address = await signer.getAddress();
      const balance = await soraTokenContract.balanceOf(address);
      const balanceCorrected = parseFloat(balance.toString()) / 1e18;
      setTokenBalance(balanceCorrected);
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  return (
    <div>
      <h5>Token Balance: {tokenBalance}</h5>
      <button onClick={() => getTokenBalance()}>
        Show My SORA Token Balance
      </button>
    </div>
  );
}

export default TokenBalanceSORA;

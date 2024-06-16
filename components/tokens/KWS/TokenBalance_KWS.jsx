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

function TokenBalanceKWS() {
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
      <h5>KWS Token Balance: {tokenBalance}</h5>
      <button onClick={() => getTokenBalance()}>
        Show My KWS Token Balance
      </button>
    </div>
  );
}

export default TokenBalanceKWS;

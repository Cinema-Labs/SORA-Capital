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

function TransferTokensSORA() {
  const transferTokens = async () => {
    try {
      const tokenAmount = ethers.parseUnits("100", 18);
      const account = "0x2f41D287f79752BF28B6D538fB6408CbF23695ef";
      const tx = await soraTokenContract.transfer(account, tokenAmount);
      await tx.wait();
      console.log("Transfer successful!");
    } catch (error) {
      console.error("Error transfering SoraTokens:", error);
    }
  };

  return (
    <div>
      <button className="btn btn-secondary" onClick={transferTokens}>
        Transfer SORA Tokens
      </button>
    </div>
  );
}

export default TransferTokensSORA;

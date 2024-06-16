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

function TransferTokensKWS() {
  const transferTokens = async () => {
    try {
      const tokenAmount = ethers.parseUnits("00", 18);
      const account = "0xEb7870979606c68438711Fb87C5db310c8969B71";
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
        Transfer KWS Tokens
      </button>
    </div>
  );
}

export default TransferTokensKWS;

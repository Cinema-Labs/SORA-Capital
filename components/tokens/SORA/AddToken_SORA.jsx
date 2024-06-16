import { ethers } from "ethers";

const provider = new ethers.BrowserProvider(window.ethereum);

const signer = await provider.getSigner();

const soraTokenContractAddress = "0x41C03e28443131668545dbC1c0b9A48002d58586";

function AddTokenSORA() {
  const addTokenToWallet = async () => {
    const tokenAddress = soraTokenContractAddress;
    const tokenSymbol = "SOR";
    const tokenDecimals = 18;
    const tokenImage =
      "https://gateway.pinata.cloud/ipfs/QmTEXkHdQQraeqKDL2ojeXDnjGvx5Qe2NbMGoKk12tzJbr/sora.png";

    try {
      const wasAdded = await provider.send("wallet_watchAsset", {
        type: "ERC20",
        options: {
          address: tokenAddress,
          symbol: tokenSymbol,
          decimals: tokenDecimals,
          image: tokenImage,
        },
      });

      if (wasAdded) {
        console.log("Token added!");
      } else {
        console.log("Token not added.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={addTokenToWallet}>
        Add SORA Token to MetaMask
      </button>
    </div>
  );
}

export default AddTokenSORA;

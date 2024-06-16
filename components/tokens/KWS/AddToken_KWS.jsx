import { ethers } from "ethers";

const provider = new ethers.BrowserProvider(window.ethereum);

const signer = await provider.getSigner();

const soraTokenContractAddress = "0x89BCa0d3619A8ed21f00BF2784aD08C16DCa2e6B";

function AddTokenKWS() {
  const addTokenToWallet = async () => {
    const tokenAddress = soraTokenContractAddress;
    const tokenSymbol = "KWS";
    const tokenDecimals = 18;
    const tokenImage =
      "https://gateway.pinata.cloud/ipfs/QmWCrKYdWPH1PMUZBsMbR3yFuwuoXo2D5chHPFs2buiwD4/kowalski.png";

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
        Add Token KWS to MetaMask
      </button>
    </div>
  );
}

export default AddTokenKWS;

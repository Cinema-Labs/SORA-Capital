import { useState } from "react";
import { ethers } from "ethers";

function WalletBalance() {
  const [balance, setBalance] = useState();

  const getBalance = async () => {
    try {
      const [account] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const balance = await provider.getBalance(account);
      setBalance(ethers.formatEther(balance));
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  return (
    <div>
      <h5>Your Balance: {balance}</h5>
      <button onClick={() => getBalance()}>Show My Balance</button>
    </div>
  );
}

export default WalletBalance;

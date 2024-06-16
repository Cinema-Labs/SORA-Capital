import { useEffect, useState } from "react";
import { ethers } from "ethers";
import WalletBalance from "./WalletBalance";
import Registry from "./Registry";
import Ownership from "./Ownership";
import TokenBalanceSORA from "./tokens/SORA/TokenBalance_SORA";
import AddTokenSORA from "./tokens/SORA/AddToken_SORA";
import TransferTokensSORA from "./tokens/SORA/FundERC20_SORA.";
import ERC6551BalanceSORA from "./tokens/SORA/ERC6551Balance_SORA";
import TokenBalanceKWS from "./tokens/KWS/TokenBalance_KWS";
import AddTokenKWS from "./tokens/KWS/AddToken_KWS";
import TransferTokensKWS from "./tokens/KWS/FundERC20_KWS.";
import ERC6551BalanceKWS from "./tokens/KWS/ERC6551Balance_KWS";

const provider = new ethers.BrowserProvider(window.ethereum);

const signer = await provider.getSigner();

function Home() {
  return (
    <div>
      <Registry />
      <Ownership />
      <WalletBalance />
      <TokenBalanceSORA />
      <AddTokenSORA />
      <TransferTokensSORA />
      <ERC6551BalanceSORA />
      <TokenBalanceKWS />
      <AddTokenKWS />
      <TransferTokensKWS />
      <ERC6551BalanceKWS />
    </div>
  );
}

export default Home;

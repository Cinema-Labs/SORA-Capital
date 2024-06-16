export type User = {
    userId: string;
    authId: string;
    verified: boolean;
    wallet: string;
    balance: number;
    name: string;
    email: string;
    investments: Investment[];
}

export type Investment = {
    assetId: string;
    bundle: Bundle[];
}

export type Bundle = {
    tokens: object[];
    date: string;
}

export type Asset = {
    assetId: string;
    name: string;
    symbol: string;
    tokens: object[];
    admFee: number;
    performanceFee: number;
    startDate: string;
    endDate: string;
    maturationPeriod: number;
    price: number;
    investors: string[];
}

// export type Token = {
//     tokenId: string;
//     tokenName: string;
//     tokenSymbol: string;
//     tokenSupply: number;
//     tokenPrice: number;
//     tokenBalance: number;
// }
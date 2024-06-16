// Mock data

import { User, Asset } from "./Types";

const users: User[] = [
    {
        userId: "user001",
        authId: "auth001",
        verified: true,
        wallet: "0xAbC1234567890",
        balance: 5000,
        name: "Alice Smith",
        email: "alice.smith@example.com",
        investments: [
            {
                assetId: "asset001",
                bundle: [
                    {
                        tokens: [{ tokenId: "token001", tokenName: "Token A", tokenSymbol: "TKA", tokenSupply: 1000, tokenPrice: 10, tokenBalance: 50 }],
                        date: "2024-01-15"
                    },
                    {
                        tokens: [{ tokenId: "token002", tokenName: "Token B", tokenSymbol: "TKB", tokenSupply: 500, tokenPrice: 20, tokenBalance: 30 }],
                        date: "2024-02-20"
                    }
                ]
            }
        ]
    },
    {
        userId: "user002",
        authId: "auth002",
        verified: false,
        wallet: "0xDeF4567890123",
        balance: 3000,
        name: "Bob Johnson",
        email: "bob.johnson@example.com",
        investments: [
            {
                assetId: "asset002",
                bundle: [
                    {
                        tokens: [{ tokenId: "token003", tokenName: "Token C", tokenSymbol: "TKC", tokenSupply: 2000, tokenPrice: 15, tokenBalance: 40 }],
                        date: "2024-03-10"
                    }
                ]
            }
        ]
    }
];

const assets: Asset[] = [
    {
        assetId: "asset001",
        name: "Real Estate Fund",
        symbol: "REF",
        tokens: [{ tokenId: "token001", tokenName: "Token A", tokenSymbol: "TKA", tokenSupply: 1000, tokenPrice: 10, tokenBalance: 50 }],
        admFee: 1.5,
        performanceFee: 20,
        startDate: "2024-01-01",
        endDate: "2024-12-31",
        maturationPeriod: 365,
        price: 100,
        investors: ["user001", "user003"]
    },
    {
        assetId: "asset002",
        name: "Tech Startup Fund",
        symbol: "TSF",
        tokens: [{ tokenId: "token003", tokenName: "Token C", tokenSymbol: "TKC", tokenSupply: 2000, tokenPrice: 15, tokenBalance: 40 }],
        admFee: 2.0,
        performanceFee: 15,
        startDate: "2024-02-01",
        endDate: "2024-11-30",
        maturationPeriod: 300,
        price: 150,
        investors: ["user002"]
    }
];

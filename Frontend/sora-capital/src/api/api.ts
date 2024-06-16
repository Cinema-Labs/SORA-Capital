import { User, Asset, Investment, Bundle } from "../utils/Types";

const fetchAssets = async () => {
    try {
        const response = await fetch("https://sora-test-virid.vercel.app/api/get-assets");
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error("error getting assets data");
            return [];
        }
    } catch (error) {
        console.error(error);
        return [];
    }
};

const fetchUsers = async () => {
    try {
        const response = await fetch("https://sora-test-virid.vercel.app/api/get-users");
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error("error getting users data");
            return [];
        }
    } catch (error) {
        console.error(error);
        return [];
    }
};

const getUserByWallet = async (wallet: string) => {
    try {
        const response = await fetch(`https://sora-test-virid.vercel.app/api/get-user/${wallet}`);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error("error getting user data");
            return {} as User;
        }
    } catch (error) {
        console.error(error);
        return {} as User;
    }
};

const createFundAsset = async (asset: Asset) => {
    try {
        const response = await fetch('https://sora-test-virid.vercel.app/api/create-fund-asset', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(asset)
        });

        if (response.ok) {
            console.log("Fund asset created");
            return 200;
        }
    } catch (err) {
        console.log(err);
        return 400;
    }
};

const createUser = async (user: User) => {
    try {
        const response = await fetch('https://sora-test-virid.vercel.app/api/create-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (response.ok) {
            console.log("User created");
            return 200;
        }
    } catch (err) {
        console.log(err);
        return 400;
    }
};

const getAsset = async (assetId: string) => {
    try {
        const response = await fetch(`https://sora-test-virid.vercel.app/api/get-asset/${assetId}`);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error("error getting asset data");
            return {} as Asset;
        }
    } catch (error) {
        console.error(error);
        return {} as Asset;
    }
};

const patchAsset = async (assetId: string, assetData: Partial<Asset>) => {
    try {
        const response = await fetch(`https://sora-test-virid.vercel.app/api/patch-asset/${assetId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(assetData)
        });

        if (response.ok) {
            console.log("Asset patched");
            return 200;
        }
    } catch (err) {
        console.log(err);
        return 400;
    }
};

const patchUser = async (userId: string, userData: Partial<User>) => {
    try {
        const response = await fetch(`https://sora-test-virid.vercel.app/api/patch-user/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            console.log("User patched");
            return 200;
        }
    } catch (err) {
        console.log(err);
        return 400;
    }
};

const addUserInvestment = async (userId: string, investment: Investment) => {
    try {
        const response = await fetch(`https://sora-test-virid.vercel.app/api/add-user-investment/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(investment)
        });

        if (response.ok) {
            console.log("Investment added to user");
            return 200;
        }
    } catch (err) {
        console.log(err);
        return 400;
    }
};

const deleteAsset = async (assetId: string) => {
    try {
        const response = await fetch(`https://sora-test-virid.vercel.app/api/delete-asset/${assetId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log("Asset deleted");
            return 200;
        }
    } catch (err) {
        console.log(err);
        return 400;
    }
};

const deleteUser = async (userId: string) => {
    try {
        const response = await fetch(`https://sora-test-virid.vercel.app/api/delete-user/${userId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log("User deleted");
            return 200;
        }
    } catch (err) {
        console.log(err);
        return 400;
    }
};

export const api = {
    fetchAssets,
    fetchUsers,
    getUserByWallet,
    createFundAsset,
    createUser,
    getAsset,
    patchAsset,
    patchUser,
    addUserInvestment,
    deleteAsset,
    deleteUser
};

import firebase from "../firebase.js";
import Asset from "../Models/Asset.js";
import User from "../Models/User.js";
import {
    getFirestore,
    collection,
    doc,
    addDoc,
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    serverTimestamp,
} from "firebase/firestore";

const db = getFirestore(firebase);

export const createFundAsset = async (req, res, next) => {
    try {
        const data = req.body;

        // Add server timestamp to the data
        data.startDate = serverTimestamp();

        const docRef = await addDoc(collection(db, "assets"), data);

        // Assign assetId to the asset
        const assetId = docRef.id;
        await updateDoc(doc(db, "assets", assetId), { assetId });

        res.status(200).send("asset created successfully");
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const createUser = async (req, res, next) => {
    try {
        const data = req.body;
        const docRef = await addDoc(collection(db, "users"), data);

        // assing userId to the user
        const userId = docRef.id;
        await updateDoc(doc(db, "users", userId), { userId });

        res.status(200).send(userId);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const getAssets = async (req, res, next) => {
    try {
        const assets = await getDocs(collection(db, "assets"));
        const assetArray = [];

        if (assets.empty) {
            res.status(400).send("No Assets found");
        } else {
            assets.forEach((doc) => {
                const asset = new Asset(
                    // doc.id,
                    doc.data().assetId,
                    doc.data().name,
                    doc.data().symbol,
                    doc.data().tokens,
                    doc.data().admFee,
                    doc.data().performanceFee,
                    doc.data().startDate,
                    doc.data().endDate,
                    doc.data().maturationPeriod,
                    doc.data().price,
                    doc.data().investors
                );
                assetArray.push(asset);
            });

            res.status(200).send(assetArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const getUsers = async (req, res, next) => {
    try {
        const users = await getDocs(collection(db, "users"));
        const usersArray = [];

        if (users.empty) {
            res.status(400).send("No users found");
        } else {
            users.forEach((doc) => {
                const user = new User(
                    // doc.id,
                    doc.data().userId,
                    doc.data().authId,
                    doc.data().verified,
                    doc.data().wallet,
                    doc.data().balance,
                    doc.data().name,
                    doc.data().email,
                    doc.data().investments
                );
                usersArray.push(user);
            });

            res.status(200).send(usersArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const getUserByWallet = async (req, res, next) => {
    try {
        const wallet = req.params.wallet;
        const users = await getDocs(collection(db, "users"));
        let userFound = false;
        let userObj = {};

        if (users.empty) {
            res.status(400).send("No users found");
        } else {
            users.forEach((doc) => {
                if (doc.data().wallet === wallet) {
                    userFound = true;
                    userObj = new User(
                        doc.data().userId,
                        doc.data().authId,
                        doc.data().verified,
                        doc.data().wallet,
                        doc.data().balance,
                        doc.data().name,
                        doc.data().email,
                        doc.data().investments
                    );
                }
            });

            if (userFound) {
                res.status(200).send(userObj);
            } else {
                res.status(404).send("User not found");
            }
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const getAsset = async (req, res, next) => {
    try {
        const assetId = req.params.id;
        const asset = doc(db, "assets", assetId);
        const data = await getDoc(asset);
        if (data.exists()) {
            res.status(200).send(data.data());
        } else {
            res.status(404).send("asset not found");
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// export const updateAsset = async (req, res, next) => {
//     try {
//         const id = req.params.id;
//         const data = req.body;
//         const asset = doc(db, "assets", id);
//         await updateDoc(asset, data);
//         res.status(200).send("asset updated successfully");
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// };

export const patchAsset = async (req, res, next) => {
    try {
        const assetId = req.params.id;
        const dataToUpdate = req.body;

        const assetRef = doc(db, "assets", assetId);
        const assetSnap = await getDoc(assetRef);

        if (assetSnap.exists()) {
            // Merge existing data with the updated data
            const existingData = assetSnap.data();
            const updatedData = { ...existingData, ...dataToUpdate };

            // Update the asset document with the updated data
            await updateDoc(assetRef, updatedData);

            res.status(200).send("Asset partially updated successfully");
        } else {
            res.status(404).send("Asset not found");
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const patchUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const dataToUpdate = req.body;

        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            // Merge existing data with the updated data
            const existingData = userSnap.data();
            const updatedData = { ...existingData, ...dataToUpdate };

            // Update the user document with the updated data
            await updateDoc(userRef, updatedData);

            res.status(200).send("User partially updated successfully");
        } else {
            res.status(404).send("User not found");
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const addUserInvestment = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const newInvestment = req.body;

        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);

        // Assing userId to the Assets invertors array
        const assetId = newInvestment.assetId;
        const assetRef = doc(db, "assets", assetId);
        const assetSnap = await getDoc(assetRef);

        if (assetSnap.exists()) {
            const assetData = assetSnap.data();

            // (dont really need to do that, but w/e) Ensure the 'investors' field exists and initialize it if it doesn't
            const updatedInvestors = assetData.investors
                ? [...assetData.investors, userId]
                : [userId];

            // Update the asset document with the modified 'investors' array
            await updateDoc(assetRef, { investors: updatedInvestors });

            if (userSnap.exists()) {
                const userData = userSnap.data();

                // Ensure the 'investments' field exists and initialize it if it doesn't
                const updatedInvestments = userData.investments
                    ? [...userData.investments, newInvestment]
                    : [newInvestment];

                // Update the user document with the modified 'investments' array
                await updateDoc(userRef, { investments: updatedInvestments });

                res.status(200).send("Investment added to user successfully");
            } else {
                res.status(404).send("User not found");
            }
        } else {
            res.status(404).send("Asset not found");
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const deleteAsset = async (req, res, next) => {
    try {
        const assetId = req.params.id;
        await deleteDoc(doc(db, "assets", assetId));
        res.status(200).send("asset deleted successfully");
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const deleteUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        await deleteDoc(doc(db, "users", userId));
        res.status(200).send("user deleted successfully");
    } catch (error) {
        res.status(400).send(error.message);
    }
};

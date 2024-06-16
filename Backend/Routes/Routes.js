import express from 'express';

import {
  getAssets,
  getUsers,
  getUserByWallet,
  createFundAsset,
  createUser,
  getAsset,
  // updateAsset,
  patchAsset,
  patchUser,
  addUserInvestment,
  deleteAsset,
  deleteUser,
} from '../Controllers/backControllers.js';

const router = express.Router();

router.get('/get-assets', getAssets);
router.get('/get-users', getUsers);
router.get('/get-user/:wallet', getUserByWallet);
router.post('/create-fund-asset', createFundAsset);
router.post('/create-user', createUser);
router.get('/get-asset/:assetId', getAsset);
// router.put('/update-asset/:id', updateAsset);
router.patch('/patch-asset/:assetId', patchAsset);
router.patch('/patch-user/:userId', patchUser);
router.patch('/add-user-investment/:userId', addUserInvestment);
router.delete('/delete-asset/:assetId', deleteAsset);
router.delete('/delete-user/:userId', deleteUser);

export default router;
import express from 'express'
import { changePassword, getAdmin, loginAdmin, updateProfile } from '../Controller/AdminController.js';
import authMiddleware from '../MiddleWares/authMiddleware.js';



const router = express.Router()

router.post('/admin-login', loginAdmin);
router.get('/admin-Profile', authMiddleware.verifyToken, getAdmin)
router.put('/change-password', authMiddleware.verifyToken, changePassword);
router.put('/update-profile', authMiddleware.verifyToken, updateProfile);


export default router
import express from "express";
import {
  forgetPasswordController,
  getAllOrdersController,
  getOrdersController,
  loginController,
  updateProfileController,
  orderStatusController,
  registerController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
const router = express.Router();

//for register
router.post('/register', registerController);

//for login
router.post('/login', loginController);

//for password forget
router.post('/forget-password', forgetPasswordController);

//for teesting middeleware
router.get('/test', requireSignIn, isAdmin, testController);

//user
router.get('/user-auth', requireSignIn, (req, res) => {
  res.status(200).send({ ok: true })
});

//admin route
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true })
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
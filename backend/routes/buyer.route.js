const { Router } = require("express");

const {registerbuyer,sendOTP,verifyOTP} = require("../controllers/buyer.controller");

const router = Router();

router.post("/register-buyer",registerbuyer);
router.post("/send-otp",sendOTP);
router.post("/verify-otp",verifyOTP);

module.exports = router
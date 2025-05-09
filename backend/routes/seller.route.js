const { Router } = require("express");

const {registerseller,sendOTP,verifyOTP} = require("../controllers/seller.controller");

const router = Router();

router.post("/register-seller",registerseller);
router.post("/send-otp",sendOTP);
router.post("/verify-otp",verifyOTP);


module.exports = router




  
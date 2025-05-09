const { Router } = require("express");
 const {createproduct} = require('../controllers/product.controller')

 const router = Router();

 router.post('/createproduct', createproduct)

 module.exports = router
const dotenv = require('dotenv').config()
const product = require('../models/product.model')


const createproduct = async (req, res) => {
  try {
    const {
      sellerId,
      productType,
      quantity,
      priceperton,
      isAvailable
      
    } = req.body;

    if (
      !sellerId ||
      !productType ||
      !quantity ||
      !priceperton ||
      !isAvailable
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill in all required fields." });
    }

    const exists = await product.findOne({ sellerId });
    if (exists) {
      return res
        .status(409)
        .json({ success: false, message: "Username or phone already in use." });
    }

    const newProduct = new product({
     sellerId,
      productType,
      quantity,
      priceperton,
      isAvailable
    });

    await newProduct.save();

    return res.status(201).json({
      success: true,
      message: "Product Added successfully.",
      productType: newProduct.productType,
    });
  } catch (error) {
    console.error("Error in createproduct:", error);
    return res.status(500).json({
      success: false,
      message: "Server error during productcreation.",
    });
  }
};

module.exports = {createproduct}
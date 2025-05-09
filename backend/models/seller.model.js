const mongoose = require('mongoose')
// const bcrypt = require ('bcryptjs')



const sellerSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
  
    role:{
        type:String,
        required:true
    },
    ricemillname:{
        type:String,
        required:true
    },
    registartionNO:{
        type:String,
        required:true
    },
    country:{
      type:String,
      required:true
  },
    state:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },

    otp:{
        type:String,
    },
    isLoggedin:{
      type:Boolean,
        default:false
    } ,
    location: {
        type: {
          type: String,
          enum: ["Point"],
          default: "Point",
        },
        coordinates: {
          type: [Number],
          required: [true, "Coordinates are required"],
        },
      },
      
      otpexpiry:{
        type:Date,
      }

})

// sellerSchema.pre("save", async function (next) {
//     if (!this.isModified("password")) return next();
  
//     try {
//       this.password = await bcrypt.hash(this.password, 10);
//       next();
//     } catch (error) {
//       next(error);
//     }
//   });

//   sellerSchema.methods.comparePassword = async function (candidatePassword) {
//     return bcrypt.compare(candidatePassword, this.password);
//   };
  

  const seller = mongoose.model("seller", sellerSchema);

module.exports = seller;
const userModel = require("../models/user.model");
const bcrypt=require('bcryptjs')
async function registerUser(req, res) {
  try {
    const { name, email, phone, password } = req.body;
    const isUserAlreadyExists = await userModel.findOne({ email: email });
    if (isUserAlreadyExists) {
      return res.status(409).json({
        message: "Email already exists",
      });
    }
    const newUser = await userModel.create({
      name,
      email,
      phone,
      password,
    });
    await newUser.save()
    const token=await newUser.generateToken()
    console.log(token)
    res.cookie("token",token,{
      httpOnly:true,
      sameSite:"strict"
    })
    return res.status(201).json({
      message: "Register successfully successfully",
    });
  } catch (error) {
    console.log("Inetrnal Error", error);
    res.status(500).json({ message: "Server Error" });
  }
}

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const isUserAlreadyExists = await userModel.findOne({ email: email });
    if (isUserAlreadyExists) {
      const isValidPassword = await bcrypt.compare(
        password,
        isUserAlreadyExists.password,
      );
      const token=await isUserAlreadyExists.generateToken()
      console.log(token)
      res.cookie("token",token,{
        httpOnly:true,
        sameSite:'strict'
      })
      if (isValidPassword) {
        return res.status(200).json({
          message: "Login Sucessfully",
          isUserAlreadyExists
        });
      }

      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }
  } catch (error) {
    console.log("Inetrnal Error", error);
    res.status(500).json({ message: "Server Error" });
  }
}



module.exports = { registerUser, loginUser };

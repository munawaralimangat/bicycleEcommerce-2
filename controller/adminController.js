const axios = require('axios')
const dotenv = require('dotenv')
const {check,validationResult} = require('express-validator')
const passport = require('passport')
const mongoose = require('mongoose')
const Admin = require('../model/schema/adminSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {authenticate} = require('../auth/jwt')
const validateLogin = require('../auth/validation')
const secretKey = "helllo"

dotenv.config({path:'config.env'})

//view admin
const loginView = async (req, res, next) =>{
    res.render('login', { errors: false});
};


//login admin
const loginAdmin = async (req, res, next) => {
  const { email, password } = req.body;
<<<<<<< HEAD
=======
  console.log(req.method)
>>>>>>> 6cb38fa9d76e249372c24bb78bfc1092ce4ec317
  
  const errors = validationResult(req);
  console.log(errors.array()); // Debugging

<<<<<<< HEAD
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => error.msg);
    console.log(errorMessages[1])
    res.status(400).render('login', { errors: errorMessages});
    return;
  }
=======
  if (!email || !password) {
    const message = "Please fill in all fields";
    return res.render("login", {
        email,
        password,
        errors
    });
}
>>>>>>> 6cb38fa9d76e249372c24bb78bfc1092ce4ec317

// Use passport.authenticate as middleware
passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true
})(req, res);

<<<<<<< HEAD
  if (authResult.success) {
    res.render('dashboard');
  } else {
    res.status(401).render('login', { errors: [authResult.message] });
  }
=======
>>>>>>> 6cb38fa9d76e249372c24bb78bfc1092ce4ec317
};

const dashboardView = (req,res)=>{
  res.render('dashboard')
  console.log(req.method)
}


module.exports = {
    loginView,
    loginAdmin,
    dashboardView
    // reg
};

// const reg = async (req,res,next) =>{
//     const admin = process.env.ADMIN_USERNAME
//     const password = process.env.ADMIN_PASSWORD
//     const hashPass = await bcrypt.hash(password,10)
//     const user = new schema({
//         email:admin,
//         password:hashPass
//     })
//     const saved = await user.save()
//     console.log(saved)
// }

///////////////////////////////////////////////////////////////////////////////////////////////////


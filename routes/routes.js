const express = require('express');
const router = express.Router();
const jwt=require('../auth/jwt')
const passport = require('passport')
const {validateLogin} = require('../auth/validation')
<<<<<<< HEAD
const {
    loginView,
    loginAdmin,
    dashboardView
} = require('../controller/adminController')
=======

const {loginView,loginAdmin,dashboardView} = require('../controller/adminController')
>>>>>>> 6cb38fa9d76e249372c24bb78bfc1092ce4ec317
//const {loginCheck} = require('../auth/jwt')

const {protectRoute} = require('../auth/protect')
const {loginCheck} = require('../auth/passport')

//view
router.get('/admin/login',validateLogin,loginView)
router.get('/admin/dashboard', protectRoute, dashboardView);


//register and login
<<<<<<< HEAD
router.post('/admin/dashboard',validateLogin,loginAdmin)





// router.get("/adminReg",loginController.reg)

// router.get('/admin/dashboard',dashboardView)
=======
router.post('/admin/login',loginAdmin)





// router.get("/adminReg",loginController.reg)

>>>>>>> 6cb38fa9d76e249372c24bb78bfc1092ce4ec317
/* GET users listing. */









module.exports = router;

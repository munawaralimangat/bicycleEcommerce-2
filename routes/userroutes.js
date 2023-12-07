const express = require('express')
const userLoginController = require('../controller/userLoginController')
const userHomeController = require('../controller/userHomeController')
const userProductController = require('../controller/userProductController')
const userCategoryController = require('../controller/userCategoryController')
const userCartController = require('../controller/cartController')
const userWishlistController = require('../controller/wishlistController')

const {requireAuth,checkUser} = require('../middleware/authMiddleware')
const router = express.Router()


router.use('*',checkUser)

//user landing controller
router.get('/landing',userHomeController.userHomeView)

//user login and signup controller
router.get('/landing/register',userLoginController.userRegView)//signup get
router.post('/landing/register',userLoginController.userRegPost)//signup post
router.get('/landing/login',userLoginController.userLoginView)//login get
router.post('/landing/login',userLoginController.userLoginPost)//login post

//user home controller
router.get('/landing/userhome',requireAuth,userHomeController.userHomeView)
router.get('/logout',requireAuth,userHomeController.logout)

//product controller
router.get('/product/:productId',userProductController.viewProduct)

//category routes
router.get('/mountainbikes',userCategoryController.viewMountain)
router.get('/roadbikes',userCategoryController.viewRoadBikes)

//cart routes
router.get('/cart',userCartController.viewCart);
router.post('/addtocart',userCartController.addToCart);

router.put('/increment/:itemId',userCartController.incrementQuantity);
router.put('/decrement/:itemId',userCartController.decrementQuantity);

router.delete('/removefromcart',userCartController.removeFromCart);

//wishlist route
router.get('/wishlist',userWishlistController.viewWishlist);
router.post('/addtowishlist',userWishlistController.addToWishlist);
router.delete('/removefromwishlist',userWishlistController.removeFromWishlist);

//checkout routes
router.get('/checkout')














// const {userLandingView,userLoginView,userLoginPost,userRegView,userRegPost,userHomeView} = require('../controller/userLoginController')

// //landing page
// router.get('/landing',userLandingView)

// //user login view
// router.get('/landing/login',userLoginView)

// //user registration
// router.get('/landing/register',userRegView)
// router.post('/landing/register',userRegPost)

// //user login
// router.post('/landing/login',userLoginPost)

// //user landing View
// router.get('/landing/userLanding',userHomeView)



module.exports = router
const { Router } = require("express");
const authController = require("../controller/auth.controller");
const authUser = require("../middleware/auth.middleware");

const router = Router();

/**
 * @route   POST /api/auth/register
 * @desc    Register new user
 * @access  Public
 */
router.post("/register", authController.registerUser);

/**
 * @route   POST /api/auth/login
 * @desc    Login user
 * @access  Public
 */
router.post("/login", authController.loginUser);

/**
 * @route   GET /api/auth/get-me
 * @desc    Get current logged-in user
 * @access  Private
 */
router.get("/get-me", authUser, authController.getMe);

/**
 * @route   GET /api/auth/logout
 * @desc    Logout user
 * @access  Private
 */
router.get("/logout", authUser, authController.logoutUser);

module.exports = router;



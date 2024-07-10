const express = require ('express');
const router = express.Router();
const controller = require ('../controller/authController');


router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/protectedRoute', controller.protectedRoute);
router.get('/admin', controller.admin);

module.exports = router;
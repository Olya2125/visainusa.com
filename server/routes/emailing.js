const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');


router.post('/sendEmail', emailController.handleSendEmail);
router.post('/sendEmployerInfo', emailController.handleSendEmployer);

module.exports = router;
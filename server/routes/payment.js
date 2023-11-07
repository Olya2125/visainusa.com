const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const verifyPayment = require('../middleware/verify')


router.post('/', verifyPayment, paymentController.handlePayment);
router.get('/level1', paymentController.handleLevel1);
router.post('/sendEmail', paymentController.handleSendEmail);
router.post('/sendEmployerInfo', paymentController.handleSendEmployer);
router.post('/verify', paymentController.handleVerify)
router.post('/paypal-transaction-complete', paymentController.handlePaypalTransactionComplete)

module.exports = router;
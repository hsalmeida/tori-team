var express = require('express');
var router = express.Router();

router.use('/User', require('../controllers/Users'));
router.use('/Home', require('../controllers/Home'));

module.exports = router;

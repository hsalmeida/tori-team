var express = require('express');
var router = express.Router();

router.use('/User', require('../controllers/Users'));

module.exports = router;

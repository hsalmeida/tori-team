var express = require('express');
var router = express.Router();

router.use('/User', require('../controllers/Users'));
router.use('/Home', require('../controllers/Home'));
router.use('/News', require('../controllers/News'));

module.exports = router;

var express = require('express');
var router = express.Router();

router.use('/episode', require('./episode'));

module.exports = router;

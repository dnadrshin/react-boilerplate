var express = require('express');
var router = express.Router();


var settings = {
	chat: 'some name',
	number: 333
}

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.json(settings);
});

module.exports = router;
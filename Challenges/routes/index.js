var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Challenges' });
});

router.get('/brackets', function (req, res) {
    res.render('brackets', { });
});

router.get('/dwarfsrafting', function (req, res) {
    res.render('dwarfs', {});
});

router.get('/flooddepth', function (req, res) {
    res.render('flooddepth', {});
});

module.exports = router;
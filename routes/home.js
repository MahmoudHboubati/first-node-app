const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'page 1',
        message: 'all good ???'
    });
});

module.exports = router;
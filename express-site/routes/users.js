const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Respond with Resourse')
})
module.exports = router

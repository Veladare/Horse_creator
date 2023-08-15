const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const horseRoutes = require('./horseRoutes')
const mainRoutes = require('./mainRoutes')


router.use('/', mainRoutes)
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/horses', horseRoutes);

module.exports = router;
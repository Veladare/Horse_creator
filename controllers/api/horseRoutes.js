const router = require('express').Router();
const { horseCharacter } = require('../../models');
const withAuth = require('../../utils/auth');

//route for getting all horses and displaying to homepage when user is logged in
router.get('/', async (req, res)=> {
    try {
        const horseData = await horseCharacter.findAll();

        const horses = horseData.map((horse) =>horse.get({ plain: true }));

        res.render('homepage', { 
            horses, 
            logged_in: req.session.logged_in 
          });
        } catch (err) {
          res.status(500).json(err);
    }
});

//should get 1 horse by its id
router.get('/horseCharacter/:id', async (req, res) => {
    try {
      const horseData = await horseCharacter.findByPk(req.params.id);
  
      const horse = horseData.get({ plain: true });
  
      res.render('horsePage', {
        ...horse,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //to create a horse, hopefully
  router.post('/', withAuth, async (req, res) => {
    try {
      const newHorse = await horseCharacter.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newHorse);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;
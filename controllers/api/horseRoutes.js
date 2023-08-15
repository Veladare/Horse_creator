const router = require('express').Router();
const { horseCharacter } = require('../../models');

  //to create a horse, hopefully
  router.post('/', async (req, res) => {
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

  router.get('/', async (req, res) => {
    try {
      const horses = await horseCharacter.findAll();
      res.status(200).json(horses);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching posts' });
    }
  });


module.exports = router;
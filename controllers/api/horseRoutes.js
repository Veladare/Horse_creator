const router = require('express').Router();
const { horseCharacter } = require('../../models');
const withAuth = require('../../utils/auth');

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
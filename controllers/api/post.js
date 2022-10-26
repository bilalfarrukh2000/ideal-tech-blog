const router = require('express').Router();
const {Post} = require('../../models');
const { User } = require('../../models');


router.get('/', async (req, res) => {
  

  try {
    const data = await Post.findAll({});

    
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
 });

router.post('/', async(req,res) => {
  try {

    const userData = await User.findOne({ where: { id: req.session.user_id } });
    const userName=userData.dataValues.name;
    
    const data = await Post.create({
      title: req.body.title,
      content: req.body.content,
      name:userName,
      userId: req.session.user_id
    });
    
  } 
  catch (err) {
    res.status(400).json(err);
  }
})
  
  
  module.exports = router;
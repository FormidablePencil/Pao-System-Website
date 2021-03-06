var express = require('express');
var router = express.Router();
const PaoSchema = require('../models/paoSchema')
const auth = require('../middleware/auth');

//~ we've added an auth middleware to protect this route. If not authorized (token and all) them denied
router.post('/api/items', auth, async (req, res) => {
  const pao = new PaoSchema({
      number: req.body.number,
      person: req.body.person,
      action: req.body.action,
      object: req.body.object
  });
  try{ //try means it's trying to catch the error if there is
    const savedPao = await pao.save()
    res.json(savedPao);
  }catch(err){
    res.json({message: err})
  }
});

router.get('/api/items', async (req, res) => {
  try{
    const paoSets = await PaoSchema.find(); //this returns everything
    res.json(paoSets);
  }catch(err){
    res.json({message:err});
  }
});

router.get('/:paoId', async (req, res) => {
  try{
    const pao = await PaoSchema.findById(req.params.paoId); 
    res.json(pao);                              //! this is the line that gets the data from db
  }catch(err){
    res.json({message:err});
  }
  // console.log(req.params.paoId); // you can access the path with params 
});

//~ Delete a specific pao. cruD
router.delete('/api/items/:paoId', auth, async (req, res) => {
  try{
    const removedPao = await PaoSchema.deleteMany({_id: req.params.paoId}); //remove the pao that is associate with the _id that is within the params (aka path).
    res.json(removedPao);
  }catch(err){
    res.json({message:err});
  }
});

//~ Updating person. crUd
router.patch('/:paoId', async (req, res) => {
  try{
    const updatedPao = await PaoSchema.updateOne(
      { _id: req.params.paoId }, 
      { $set: 
        {
          person: req.body.person,
          number: req.body.number, 
          action: req.body.action, 
          object: req.body.object 
        }
      }
    );
    res.json(updatedPao);
  }catch(err){
    res.json({message:err});
  }
});

module.exports = router;
var express = require('express');
var router = express.Router();
const User = require('../Models/userSchema.js');

/* GET home page. */
router.get('/getalldata',async function(req, res, next) {
  try {
    const getdata = await User.find()
    res.status(200).json({
      status:"sucess",
      data:getdata
    })
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

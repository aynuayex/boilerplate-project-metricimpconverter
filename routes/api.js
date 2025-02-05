'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route("/api/convert")
    .get((req, res) => {
    const { input } = req.query
    console.log({input})

    const initUnit = convertHandler.getUnit(input)
    const initNum = convertHandler.getNum(input)

    const returnUnit = convertHandler.getReturnUnit(initUnit)
    const returnNum = convertHandler.convert(initNum, initUnit)
    
    if(isNaN(initNum) && !returnUnit) {
      return res.send("invalid number and unit")
    } 
    if(isNaN(initNum)) {
      return res.send("invalid number")
    } 
    if(!returnUnit) {
      console.log("invalid unit")
      return res.send("invalid unit")
    }

    const string = convertHandler.getString(initNum, initUnit, returnNum.toFixed(5), returnUnit)

    res.json({ initNum: parseFloat(initNum), initUnit, 
      returnNum: parseFloat(returnNum.toFixed(5)), returnUnit, string: `${string}`})
  })

};

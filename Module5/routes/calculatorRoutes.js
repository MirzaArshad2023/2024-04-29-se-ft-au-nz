const express = require('express')
const calcController = require('../Controllers/calculatorController')
const calculatorRouter = express.Router()

calculatorRouter.get('/Add', (req, res)=>{
    
    calcController.Add(req, res)
    
})

calculatorRouter.get('/Multiply', (req, res)=>{
    
   calcController.Multiply(req, res)
   
})

module.exports = calculatorRouter
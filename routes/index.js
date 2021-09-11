const express = require('express')
const {Router} = express
const router = Router()
const Data = require("../data.json")

router.get('/',(req,res)=>{
    let hasSearched = false
    let searchResult = undefined
    let notFound = false
    res.render('index',{searchResult,hasSearched,notFound})
})
router.post('/',(req,res)=>{
    let hasSearched = true
    const {keyword} = req.body
    let searchResult  = Data[`${keyword}`]
    let notFound = false
    if(!searchResult){
        let notFound = true
        res.render("index",{searchResult,hasSearched:false,notFound})
    }
    else{
        res.render("index",{searchResult,hasSearched,notFound})
    }
   
})
router.post('/add',(req,res)=>{
    const{item , description} = req.body
    Data[`${item}`] = []
    Data[`${item}`][0] = description
    console.log( Data[`${item}`])
    res.redirect('/')
})

module.exports = router
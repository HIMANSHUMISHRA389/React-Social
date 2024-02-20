const router=require("express").Router()



router.get('/',(req,res)=>{
    res.send("welcome to my page")
})
module.exports= router;
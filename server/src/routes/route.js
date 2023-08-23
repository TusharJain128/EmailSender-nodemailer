const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");


router.get("/test", (req,res)=>{
    res.status(200).send({status: true, message: "api is working fine"});
})


router.post("/send", async function (req,res){
    try {
        let {email, subject, message} = req.body;

        if(!email) return res.status(400).send({status: false, data: "Email cannot be empty"})
        if(!message) return res.status(400).send({status: false, data: "message cannot be empty"})
        
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.USERID,  // Enter Your Gmail Id here
                pass: process.env.PASSWORD  // Go to Gmail setting > Security > search App password > Select App- Mail and select device- windows computer > Then Generated password you have to enter
            }
        })

        const info = await transporter.sendMail({ 
            to: email,
            subject: subject,
            text: message
        })

        res.status(201).send({status: true, data: "Email send successfully..."})
    } 
    catch (error) {
        res.status(500).send({status: false, error: error});
    }

})

module.exports = router;
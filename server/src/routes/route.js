const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");


router.get("/test", (req,res)=>{
    res.status(200).send({status: true, message: "api is working fine"});
})


router.post("/send", async function (req,res){
    try {
        let {email, subject, text} = req.body;
        
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.USERID,
                pass: process.env.PASSWORD
            }
        })

        const info = await transporter.sendMail({ 
            to: email,
            subject: subject,
            text: text
        })

        res.status(201).send({status: true, message: info.response})
    } 
    catch (error) {
        res.status(500).send({status: false, error: error});
    }

})

module.exports = router;
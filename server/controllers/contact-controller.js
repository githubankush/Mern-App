const Contact = require("../models/contact-model")

const contactForm = async (req,res,next) => {
    try{ 
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({message:"Contact Form Submitted Successfully"});
    }
    catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}   
module.exports = contactForm;
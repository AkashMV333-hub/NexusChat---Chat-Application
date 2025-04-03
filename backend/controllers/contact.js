import User from "../models/User.js"

export const getcontacts = async (req,res,next) => {
    try {
        let fullcontacts = [];
        const newcontacts = req.body.contacts;
        console.log(newcontacts);
        for(let i = 0; i < newcontacts.length; i++){
            console.log(newcontacts[i]);
            const fetchcontact = await User.findOne({ userId: newcontacts[i] });
            fullcontacts = [ ...fullcontacts, fetchcontact ];
        }
        res.status(200).json({
            contacts: fullcontacts
        })
    } catch(err) {
        next(err);
    }
}
import mongoose from 'mongoose';
import connectDB from '../../middleware/connectMongo';
import User from '../../model/user';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        console.log(req.body);

        // const u = new User(req.body);
        // await u.save();
        // res.status(200).json({ success: true, username: req.body.username });

        let user = await User.findOne({ "username" : req.body.username})
        if (user) {
            if (req.body.username == user.username && req.body.password == user.password) {
                res.status(200).json({ success: true, username: user.username });
            }
            else {
                res.status(200).json({ success: false, error: "Dont you remember!" });
            }
        }
        else {
            res.status(200).json({ success: false, error: "You are not me" });
        }

    }
    else {
        res.status(400).json({ error: "error" });
    }
};

export default connectDB(handler);



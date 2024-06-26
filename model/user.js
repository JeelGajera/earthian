import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    username: {type: String , required: true, unique: true},
    password: {type: String , required: true},
}, {timestamps: true});

export default model.user || model('users', userSchema);
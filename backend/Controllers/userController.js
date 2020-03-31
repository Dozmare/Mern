import mongoose from 'mongoose';
import userSchema from '../Models/userModel';

const User = mongoose.model('User', userSchema);

export const getAll = async (req, res) => {
    const users = await User.find().populate('messages');
    res.json(users);
};

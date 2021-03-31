import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        minlength: 4,
        maxlength: 99 
    }
})

const userModel = mongoose.model('User', schema);

export default userModel;
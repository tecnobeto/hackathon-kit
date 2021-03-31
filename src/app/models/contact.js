import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        minlength: 4,
        maxlength: 99 
    }
})

const userModel = mongoose.model('Contato', contactSchema);

export default userModel;
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength:50,
        minlength:2

    },

    email: {
        type: String,
        required: true,
        unique: true,
        maxlength:100,
        minlength:5
    },

    

})
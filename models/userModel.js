const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'A user must have a name'],
        trim: true
    },
    email:{
        type: String,
        required: [true,'A user must have an email'],
        unique: true,
        trim: true
    },
    profilePicture: String,
    posts:{
        author: String,
        date:{
            type: Date,
            default: Date.now(),
            trim: true
        },
        comments:{
            author: String,
            comment: [String],
            trim: true

        },
        postImages:[String],
        images:[String]
    }
})

const User = mongoose.model('User',userSchema);

module.exports = User;
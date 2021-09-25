const { Schema, model } = require('mongoose');

// Creating schema to be used for User model
const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// Get the total friends of User by referencing other users
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// Creating the User model and having it use the schema for information
const User = model('User', UserSchema);

// Export the User model to be used throughout application
module.exports = User;
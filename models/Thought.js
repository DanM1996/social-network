const { Schema, model, Types } = require('mongoose');
const dateFormat = require('dateformat');

const ReactionSchema = new Schema (
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      trim: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal, "dddd, mmmm dS, yyyy, h:MM:ss TT")
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
)
const ThoughtSchema = new Schema (
    {
       thoughtText: {
           type: String,
           required: true,
           trim: true,
           minlength: 1,
           maxlength: 280
       },
       createdAt: {
         type: Date,
         default: Date.now,
         get: createdAtVal => dateFormat(createdAtVal, "dddd, mmmm dS, yyyy, h:MM:ss TT") 
       },
       username: {
         type: String,
         required: true,
         ref: 'User'
       },
       reactions: [ReactionSchema]
    },
    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      id: false
    }
)

ThoughtSchema.virtual('reactionCount').get(function(){
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
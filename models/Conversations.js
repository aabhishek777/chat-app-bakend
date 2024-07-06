import mongoose from "mongoose";

const conversationSchema = mongoose.Schema({
    members: {
        type: Array,
        required: true,
    }
});

export const  Conversations = mongoose.model('Conversation', conversationSchema);


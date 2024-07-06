import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    conversationId: {
        type: String,
    },
    senderId: {
        type: String
    },
    message: {
        type: String
    }
});

export const Messages = mongoose.model('Message', messageSchema);


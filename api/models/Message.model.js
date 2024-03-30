const mongoose=require("mongoose")


const MessageSchema = mongoose.Schema(
  {
    conversationId: {
      type: String,
      required: true,
    },
    senderId: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

const Message=mongoose.model("Message",MessageSchema);
module.exports=Message


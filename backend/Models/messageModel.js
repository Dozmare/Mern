import { Schema } from 'mongoose';

const messageSchema = new Schema({
    msg: {
        type: String,
        required: true
    },
    userName: {
        type: Schema.Types.ObjectId, ref: 'User'
    }
});

export default messageSchema;
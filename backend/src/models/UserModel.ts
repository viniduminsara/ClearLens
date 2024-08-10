import mongoose from 'mongoose';

export interface IUserModel {
    username: string;
    password: string;
    email: string;
}

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

//@ts-ignore
const UserModel = mongoose.model<IUserModel>("User", UserSchema);

export default UserModel;

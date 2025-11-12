import mongoose, {Schema, Document} from "mongoose";

interface IProfile extends Document {
    username: string,
    discription: string,
    imageUrl: string,
}

const profileSchema = new Schema<IProfile>({
    username: {type: String, required: true},
    discription: {type: String, maxlength: 30},
    imageUrl: {type: String, required: true, },
});

export const Profile = mongoose.model("profile", profileSchema);
import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  givenName: {
    type: String,
    required: [true, "Given name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exists"],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", userSchema);

export default User;

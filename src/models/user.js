import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  address: String,
});

// Ensure mongoose.models is properly initialized before accessing it
const User = mongoose.model("User", UserSchema) || mongoose.models.User;

export default User;

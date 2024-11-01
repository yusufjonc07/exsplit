import mongoose from "mongoose";

const Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    subscription: {
      type: String,
      required: false,
      enum: ["basic", "premium"],
      default: "basic"
    },
    images: {
      type: Array,
      required: false,
      default: [],
    },
    role: {
      type: String,
      enum: ["user", "admin", "editor"],
      default: "user",
      required: false,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "pending"],
      default: "inactive",
      required: false,
    },
  },

  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;

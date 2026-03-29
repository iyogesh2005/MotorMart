// import mongoose from "mongoose";
// import bcrypt from "bcryptjs";

// const userSchema = mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   password: String,
//   role: { type: String, default: "user" },
// }, { timestamps: true });

// userSchema.pre("save", async function(next) {
//   if (!this.isModified("password")) return next();
//   this.password = await bcrypt.hash(this.password, 10);
// });

// userSchema.methods.matchPassword = function(password) {
//   return bcrypt.compare(password, this.password);
// };

// export default mongoose.model("User", userSchema);

import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" },
}, { timestamps: true });

// Hash password
userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Match password
userSchema.methods.matchPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

export default mongoose.model("User", userSchema);
import mongoose from "mongoose";

const pgSchema=new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim:true,
    },
    location:{
        type:String,
        required:true,
    },
    city: {
      type: String,
      default: "Delhi NCR",
    },
    rent: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "any"],
      default: "any",
    },
    amenities: {
      type: [String], // ["WiFi", "Food", "AC"]
      default: [],
    },
    images: {
      type: [String], // image URLs (later)
      default: [],
    },
    contact: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
},
{
    timestamps:true, // adds createdAt & updatedAt
}
);

const PG=mongoose.model("PG",pgSchema)

export default PG;
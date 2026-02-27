import mongoose, { Schema, InferSchemaType } from "mongoose";

const HotelSchema = new Schema(
  {
    city: {
      type: String,
      enum: ["Makkah", "Madinah"],
      required: true,
      unique: true,
      immutable: true, // ❗ cannot be changed after creation
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    gMapUrl: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export type Hotel = InferSchemaType<typeof HotelSchema>;

export const HotelModel =
  mongoose.models.Hotel || mongoose.model("Hotel", HotelSchema);
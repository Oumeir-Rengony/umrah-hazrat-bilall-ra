import mongoose, { Schema, InferSchemaType } from "mongoose";

const FlightSchema = new Schema(
  {
    departureDate: { type: String, required: true },
    departureTime: { type: String, required: true },
    flightNumber: { type: String, required: true },
    groupRep: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export type Flight = InferSchemaType<typeof FlightSchema> & {
  _id: string;
};

export const FlightModel = mongoose.models.Flight || mongoose.model("Flight", FlightSchema);
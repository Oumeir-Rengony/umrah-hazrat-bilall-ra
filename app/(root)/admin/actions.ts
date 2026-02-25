"use server";

import "@/lib/mongoose";
import { FlightModel } from "@/lib/models/flights";

export interface Flight {
  _id: string;
  departureDate: string;
  departureTime: string;
  flightNumber: string;
  groupRep: string;
}

/* ---------------- GET ---------------- */
export async function getFlightData(): Promise< Flight[]> {
  const flights = await FlightModel.find().sort({ createdAt: 1 }).lean();

  const mappedFlights = flights.map((f) => ({
      _id: f._id.toString(),
      departureDate: f.departureDate,
      departureTime: f.departureTime,
      flightNumber: f.flightNumber,
      groupRep: f.groupRep,
    })) 

  return mappedFlights as Flight[];
  
}

/* ---------------- ADD ---------------- */
export async function addFlight(
  formData: FormData
): Promise<{ success: boolean; error?: string }> {
  const departureDate = formData.get("departureDate") as string;
  const departureTime = formData.get("departureTime") as string;
  const flightNumber = formData.get("flightNumber") as string;
  const groupRep = formData.get("groupRep") as string;

  if (!departureDate || !departureTime || !flightNumber || !groupRep) {
    return { success: false, error: "All fields are required." };
  }

  await FlightModel.create({
    departureDate,
    departureTime,
    flightNumber,
    groupRep,
  });

  return { success: true };
}

/* ---------------- UPDATE ---------------- */
export async function updateFlight(
  id: string,
  formData: FormData
): Promise<{ success: boolean; error?: string }> {
  const departureDate = formData.get("departureDate") as string;
  const departureTime = formData.get("departureTime") as string;
  const flightNumber = formData.get("flightNumber") as string;
  const groupRep = formData.get("groupRep") as string;

  if (!departureDate || !departureTime || !flightNumber || !groupRep) {
    return { success: false, error: "All fields are required." };
  }

  const updated = await FlightModel.findByIdAndUpdate(
    id,
    { departureDate, departureTime, flightNumber, groupRep },
    { returnDocument: "after" }
  );

  if (!updated) {
    return { success: false, error: "Flight not found." };
  }

  return { success: true };
}

/* ---------------- DELETE ---------------- */
export async function deleteFlight(
  id: string
): Promise<{ success: boolean; error?: string }> {
  const deleted = await FlightModel.findByIdAndDelete(id);
  console.log("Delete Operation", deleted)

  if (!deleted) {
    return { success: false, error: "Flight not found." };
  }

  return { success: true };
}
"use server";

import { FlightModel } from "@/lib/models/flights";
import { HotelModel } from "@/lib/models/hotels";

import { connectDB } from "@/lib/mongoose";
import { sleep } from "@/lib/utils";
import { revalidatePath } from "next/cache";

export interface Flight {
  _id: string;
  departureDate: string;
  departureTime: string;
  flightNumber: string;
  groupRep: string;
}


export interface Hotel {
  _id: string;
  city: "Makkah" | "Madinah";
  name: string;
  address: string;
  description: string;
  gMapUrl: string;
}

export type ActionResult<T> =
  | { success: true; data: T }
  | { success: false; error: string };


/* ---------------- GET FLIGHT ---------------- */
export async function getFlightData(): Promise<ActionResult<Flight[]>> {

  try {
    await connectDB();
    const flights = await FlightModel.find().sort({ createdAt: 1 }).lean();

    const mappedFlights = flights.map((f) => ({
      _id: f._id.toString(),
      departureDate: f.departureDate,
      departureTime: f.departureTime,
      flightNumber: f.flightNumber,
      groupRep: f.groupRep,
    }));

    // await sleep(5000);

    return {
      success: true,
      data: mappedFlights as Flight[]
    }
  }
  catch (error) {
    console.error("get flight error:", error);
    return { success: false, error: "Failed to get flight." };
  }
}

/* ---------------- ADD FLIGHT ---------------- */
export async function addFlight(
  formData: FormData
): Promise<{ success: boolean; error?: string }> {

  try {

    await connectDB();

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

    revalidatePath('/flight-schedule');

    return { success: true };
  }
  catch (error) {
    console.error("add flight error:", error);
    return { success: false, error: "Failed to add flight." };
  }
}

/* ---------------- UPDATE FLIGHT ---------------- */
export async function updateFlight(
  id: string,
  formData: FormData
): Promise<{ success: boolean; error?: string }> {

  try {

    await connectDB()

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

    revalidatePath('/flight-schedule');

    return { success: true };
  }

  catch (error) {
    console.error("Update flight error:", error);
    return { success: false, error: "Failed to Update flight." };
  }
}

/* ---------------- DELETE FLIGHT ---------------- */
export async function deleteFlight(
  id: string
): Promise<{ success: boolean; error?: string }> {

  try {
    await connectDB();

    const deleted = await FlightModel.findByIdAndDelete(id);
    console.log("Delete Operation", deleted)

    if (!deleted) {
      return { success: false, error: "Flight not found." };
    }

    revalidatePath('/flight-schedule');

    return { success: true };
  }
  catch (error) {
    console.error("Delete flight error:", error);
    return { success: false, error: "Failed to delete flight." };
  }
}


/* ---------------- GET HOTEL ---------------- */

export async function getHotels():Promise<ActionResult<Hotel[]>>{
  await connectDB();

  try {
    const hotels = await HotelModel.find()
      .sort({ createdAt: 1 }) // optional, for deterministic output
      .lean()
      .exec();

    
    const mappedHotels = hotels.map((f) => ({
      _id: f._id.toString(),
      city: f.city,
      name: f.name,
      address: f.address,
      description: f.description,
      gMapUrl: f.gMapUrl
    }));

    return {
      success: true,
      data: mappedHotels,
    };
  } catch (error) {
    console.error("getHotels error:", error);
    return {
      success: false,
      error: "Failed to fetch hotels.",
    };
  }
}


/* ---------------- UPDATE HOTEL ---------------- */

export async function updateHotel(
  city: "Makkah" | "Madinah",
  formData: FormData
):Promise<{ success: boolean; error?: string }>  {
  try {

    await connectDB();

    
    const name = formData.get("name")?.toString();
    const address = formData.get("address")?.toString();
    const gMapUrl = formData.get("gMapUrl")?.toString();
    
    if (!name || !address || !gMapUrl) {
      return { success: false, error: "Invalid form data." };
    }

    const updated = await HotelModel.findOneAndUpdate(
      { city },
      { name, address, gMapUrl },
      {
        new: true, // return updated doc
        runValidators: true,
      }
    );

    console.log(updated);

    if (!updated) {
      return {
        success: false,
        error: `Hotel for ${city} does not exist.`,
      };
    }

    revalidatePath('/hotels');

    return { success: true };
  } catch (error) {
    console.error("updateHotel error:", error);
    return { success: false, error: "Failed to update hotel." };
  }
}
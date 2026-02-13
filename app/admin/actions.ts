"use server";

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export interface Flight {
  departureDate: string;
  departureTime: string;
  flightNumber: string;
  groupRep: string;
}

export interface Hotel {
  name: string;
  address: string;
  lat: number;
  lng: number;
}

export interface FlightData {
  flights: Flight[];
  reminder: string;
  hotels: {
    makkah: Hotel;
    madinah: Hotel;
  };
}

const DATA_PATH = path.join(process.cwd(), "public", "data", "flights.json");

export async function getFlightData(): Promise<FlightData> {
  const raw = await readFile(DATA_PATH, "utf-8");
  return JSON.parse(raw) as FlightData;
}

export async function addFlight(formData: FormData): Promise<{ success: boolean; error?: string }> {
  const departureDate = formData.get("departureDate") as string;
  const departureTime = formData.get("departureTime") as string;
  const flightNumber = formData.get("flightNumber") as string;
  const groupRep = formData.get("groupRep") as string;

  if (!departureDate || !departureTime || !flightNumber || !groupRep) {
    return { success: false, error: "All fields are required." };
  }

  const data = await getFlightData();
  data.flights.push({ departureDate, departureTime, flightNumber, groupRep });
  await writeFile(DATA_PATH, JSON.stringify(data, null, 2), "utf-8");
  return { success: true };
}

export async function updateReminder(formData: FormData): Promise<{ success: boolean; error?: string }> {
  const reminder = formData.get("reminder") as string;

  if (!reminder || reminder.trim().length === 0) {
    return { success: false, error: "Reminder text cannot be empty." };
  }

  const data = await getFlightData();
  data.reminder = reminder.trim();
  await writeFile(DATA_PATH, JSON.stringify(data, null, 2), "utf-8");
  return { success: true };
}

export async function updateFlight(
  index: number,
  formData: FormData,
): Promise<{ success: boolean; error?: string }> {
  const departureDate = formData.get("departureDate") as string;
  const departureTime = formData.get("departureTime") as string;
  const flightNumber = formData.get("flightNumber") as string;
  const groupRep = formData.get("groupRep") as string;

  if (!departureDate || !departureTime || !flightNumber || !groupRep) {
    return { success: false, error: "All fields are required." };
  }

  const data = await getFlightData();

  if (index < 0 || index >= data.flights.length) {
    return { success: false, error: "Invalid flight index." };
  }

  data.flights[index] = { departureDate, departureTime, flightNumber, groupRep };
  await writeFile(DATA_PATH, JSON.stringify(data, null, 2), "utf-8");
  return { success: true };
}

export async function deleteFlight(index: number): Promise<{ success: boolean; error?: string }> {
  const data = await getFlightData();

  if (index < 0 || index >= data.flights.length) {
    return { success: false, error: "Invalid flight index." };
  }

  data.flights.splice(index, 1);
  await writeFile(DATA_PATH, JSON.stringify(data, null, 2), "utf-8");
  return { success: true };
}

export async function updateHotel(
  city: "makkah" | "madinah",
  formData: FormData,
): Promise<{ success: boolean; error?: string }> {
  const name = formData.get("name") as string;
  const address = formData.get("address") as string;
  const latStr = formData.get("lat") as string;
  const lngStr = formData.get("lng") as string;

  if (!name || !address || !latStr || !lngStr) {
    return { success: false, error: "All fields are required." };
  }

  const lat = Number.parseFloat(latStr);
  const lng = Number.parseFloat(lngStr);

  if (Number.isNaN(lat) || Number.isNaN(lng)) {
    return { success: false, error: "Latitude and longitude must be valid numbers." };
  }

  const data = await getFlightData();
  data.hotels[city] = { name, address, lat, lng };
  await writeFile(DATA_PATH, JSON.stringify(data, null, 2), "utf-8");
  return { success: true };
}

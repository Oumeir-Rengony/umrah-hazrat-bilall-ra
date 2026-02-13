import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { getFlightData } from "./actions";
import { AdminFlightTable } from "@/components/admin/flight-table";
import { ReminderEditor } from "@/components/admin/reminder-editor";
import { HotelEditor } from "@/components/admin/hotel-editor";

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Manage departure details and reminders.",
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const data = await getFlightData();

  return (
    <>
      <PageHeader
        title="Admin Panel"
        description="Manage departure details and the reminder message. Changes are saved instantly."
      />
      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 lg:px-8">
          {/* Flight Management */}
          <AdminFlightTable initialFlights={data.flights} />

          {/* Reminder Editor */}
          <ReminderEditor initialReminder={data.reminder} />

          {/* Hotel Editor */}
          <HotelEditor
            makkahHotel={data.hotels.makkah}
            madinahHotel={data.hotels.madinah}
          />
        </div>
      </section>
    </>
  );
}

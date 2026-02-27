import { Suspense } from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { getFlightData, getHotels } from "./actions";
import { HotelEditor } from "@/components/admin/hotel-editor";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { FlightProvider } from "@/components/admin/flight-provider/flight-provider";
import { AdminFlightCard } from "@/components/admin/flight-provider/flight-card";
import { AdminFlightTable } from "@/components/admin/flight-provider/flight-table";
import { AdminFlightTableSkeleton } from "@/components/admin/flight-provider/flight-table-skeleton";

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Manage departure details and reminders.",
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {

  const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
  });

  if (!session) {
    redirect("/login");
  }

  const flightsPromise =  getFlightData();
  const hotelsPromise =  getHotels();

  return (
    <>
      <PageHeader
        title="Admin Panel"
        description="Manage departure details and the reminder message. Changes are saved instantly."
      />
      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 lg:px-8">
          
          {/* Flight Management */}
          
            {/* <AdminFlightTable flightsPromise={flightsPromise} /> */}

          <FlightProvider>
            <AdminFlightCard>
              <Suspense fallback={<AdminFlightTableSkeleton/> }>
                <AdminFlightTable flightsPromise={flightsPromise} />
              </Suspense>
            </AdminFlightCard>
          </FlightProvider>
          

          {/* Hotel Editor */}
          <Suspense>
            <HotelEditor hotelsPromise={hotelsPromise} />
          </Suspense>
        </div>
      </section>
    </>
  );
}

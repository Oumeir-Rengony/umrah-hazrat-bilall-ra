import type { Metadata } from "next";
import { AlertTriangle, Clock, Plane } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getFlightData } from "@/app/admin/actions";

export const metadata: Metadata = {
  title: "Flight Schedule",
  description:
    "View your Umrah flight departure dates, times, and group representatives.",
};

export const dynamic = "force-dynamic";

export default async function FlightSchedulePage() {
  const data = await getFlightData();
  const flights = data.flights;
  const reminder = data.reminder;
  return (
    <>
      <PageHeader
        title="Flight Schedule"
        description="Your complete flight schedule with departure times, flight numbers, and group representatives."
      />
      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Desktop Table */}
          <Card className="hidden border-border bg-card md:block">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-foreground">
                <Plane className="h-5 w-5 text-primary" />
                Departure Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-border hover:bg-transparent">
                    <TableHead className="text-foreground">Departure Date</TableHead>
                    <TableHead className="text-foreground">Departure Time</TableHead>
                    <TableHead className="text-foreground">Flight Number</TableHead>
                    <TableHead className="text-foreground">Group Representative</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {flights.map((flight, i) => (
                    <TableRow key={i} className="border-border">
                      <TableCell className="font-medium text-foreground">
                        {flight.departureDate}
                      </TableCell>
                      <TableCell className="text-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                          {flight.departureTime}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-0.5 text-sm font-medium text-primary">
                          {flight.flightNumber}
                        </span>
                      </TableCell>
                      <TableCell className="text-foreground">{flight.groupRep}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Mobile Cards */}
          <div className="flex flex-col gap-3 md:hidden">
            {flights.map((flight, i) => (
              <Card key={i} className="border-border bg-card">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {flight.departureDate}
                      </p>
                      <p className="mt-1 text-lg font-semibold text-foreground">
                        {flight.departureTime}
                      </p>
                    </div>
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-sm font-medium text-primary">
                      {flight.flightNumber}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-2 border-t border-border pt-3 text-sm text-muted-foreground">
                    <Plane className="h-3.5 w-3.5" />
                    <span>{flight.groupRep}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Warning Banner */}
          <Alert className="mt-8 border-destructive/30 bg-destructive/5">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <AlertTitle className="text-destructive">Important Reminder</AlertTitle>
            <AlertDescription className="text-destructive/80">
              {reminder}
            </AlertDescription>
          </Alert>
        </div>
      </section>
    </>
  );
}

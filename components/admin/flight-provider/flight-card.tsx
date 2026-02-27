"use client";

import { Plane, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useFlightDialog } from "./flight-provider";

export function AdminFlightCard({
  children,
}: {
  children?: React.ReactNode;
}) {
  const { openAddDialog } = useFlightDialog();

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Plane className="h-5 w-5 text-primary" />
              Current Departure Details
            </CardTitle>
            <CardDescription className="mt-1.5">
              Manage your flight schedule. Edit or remove existing flights, or add new ones.
            </CardDescription>
          </div>

          <Button onClick={openAddDialog}>
            <Plus className="mr-2 h-4 w-4" />
            Add Flight
          </Button>
        </div>
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
}
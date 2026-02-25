"use client";

import { useRef, useState, useTransition } from "react";
import { Plus, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addFlight } from "@/app/(root)/admin/actions";
import { useRouter } from "next/navigation";

export function AddFlightForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const router = useRouter();

  function handleSubmit(formData: FormData) {
    setMessage(null);
    startTransition(async () => {
      const result = await addFlight(formData);
      if (result.success) {
        setMessage({ type: "success", text: "Flight added successfully." });
        formRef.current?.reset();
        router.refresh();
        setTimeout(() => setMessage(null), 3000);
      } else {
        setMessage({
          type: "error",
          text: result.error || "Something went wrong.",
        });
      }
    });
  }

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-foreground">
          <Plus className="h-5 w-5 text-primary" />
          Add New Flight
        </CardTitle>
        <CardDescription>
          Fill in the details below to add a new departure to the schedule.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="departureDate" className="text-foreground">
                Departure Date
              </Label>
              <Input
                id="departureDate"
                name="departureDate"
                placeholder="e.g. 15 Mar 2026"
                required
                disabled={isPending}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="departureTime" className="text-foreground">
                Departure Time
              </Label>
              <Input
                id="departureTime"
                name="departureTime"
                placeholder="e.g. 08:30"
                required
                disabled={isPending}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="flightNumber" className="text-foreground">
                Flight Number
              </Label>
              <Input
                id="flightNumber"
                name="flightNumber"
                placeholder="e.g. SV 812"
                required
                disabled={isPending}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="groupRep" className="text-foreground">
                Group Representative
              </Label>
              <Input
                id="groupRep"
                name="groupRep"
                placeholder="e.g. Sheikh Ahmad Al-Farsi"
                required
                disabled={isPending}
              />
            </div>
          </div>

          {message && (
            <div
              className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm ${
                message.type === "success"
                  ? "bg-primary/10 text-primary"
                  : "bg-destructive/10 text-destructive"
              }`}
            >
              {message.type === "success" && (
                <CheckCircle2 className="h-4 w-4" />
              )}
              {message.text}
            </div>
          )}

          <div>
            <Button type="submit" disabled={isPending} className="font-medium">
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Adding...
                </>
              ) : (
                <>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Flight
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

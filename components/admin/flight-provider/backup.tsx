"use client";

import { use, useState, useTransition } from "react";
import { Trash2, Plane, Loader2, Pencil, CheckCircle2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { ActionResult, Flight } from "@/app/(root)/admin/actions";
import { deleteFlight, updateFlight, addFlight } from "@/app/(root)/admin/actions";
import { cn } from "@/lib/utils";

const EMPTY_FORM: Omit<Flight, "_id"> = {
  departureDate: "",
  departureTime: "",
  flightNumber: "",
  groupRep: "",
};

export function AdminFlightTable({
  flightsPromise,
}: {
  flightsPromise: Promise<ActionResult<Flight[]>>;
}) {
  const flightRes = use(flightsPromise);


  const flights = flightRes?.success ? flightRes.data : [];
  
  const [isPending, startTransition] = useTransition();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [mode, setMode] = useState<"add" | "edit">("add");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [form, setForm] = useState(EMPTY_FORM);

  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  /* ---------------- OPEN DIALOGS ---------------- */

  function openAddDialog() {
    setMode("add");
    setEditingId(null);
    setForm(EMPTY_FORM);
    setMessage(null);
    setDialogOpen(true);
  }

  function openEditDialog(flight: Flight) {
    setMode("edit");
    setEditingId(flight._id);
    setForm({
      departureDate: flight.departureDate,
      departureTime: flight.departureTime,
      flightNumber: flight.flightNumber,
      groupRep: flight.groupRep,
    });
    setMessage(null);
    setDialogOpen(true);
  }

  /* ---------------- SUBMIT ---------------- */

  function handleSubmit() {
    setMessage(null);

    const fd = new FormData();
    Object.entries(form).forEach(([key, value]) =>
      fd.set(key, value),
    );

    startTransition(async () => {
      const result = mode === "add"
          ? await addFlight(fd)
          : await updateFlight(editingId!, fd);

      if (result.success) {
        setMessage({
          type: "success",
          text: mode === "add"
              ? "Flight added successfully."
              : "Flight updated successfully.",
        });

        setTimeout(() => {
          setDialogOpen(false);
          setMessage(null);
          setEditingId(null);
        }, 1200);
      } else {
        setMessage({
          type: "error",
          text: result.error || "Something went wrong.",
        });
      }
    });
  }

  /* ---------------- DELETE ---------------- */

  function handleDelete() {
    startTransition(async () => {
      if(!deletingId) return;

      const result = await deleteFlight(deletingId);

      if (result.success) {
        setDeletingId(null);

      } 
    });
  }

  /* ---------------- RENDER ---------------- */

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <CardTitle className="flex items-center gap-2 text-lg text-foreground">
              <Plane className="h-5 w-5 text-primary" />
              Current Departure Details
            </CardTitle>
            <CardDescription className="mt-1.5">
              Manage your flight schedule. Edit or remove existing flights, or add new ones.
            </CardDescription>
          </div>
          <Button onClick={openAddDialog} disabled={isPending}>
            <Plus className="mr-2 h-4 w-4" />
            Add New Flight
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        {flights?.length === 0 ? (
          <p className="py-8 text-center text-sm text-muted-foreground">
            No flights added yet.
          </p>
        ) : (

          <>
         
            <div className="hidden md:block">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-medium text-foreground">Departure Date</TableHead>
                    <TableHead className="font-medium text-foreground">Departure Time</TableHead>
                    <TableHead className="font-medium text-foreground">Flight Number</TableHead>
                    <TableHead className="font-medium text-foreground">Group Representative</TableHead>
                    <TableHead className="w-[100px]" />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {flights && flights?.map((flight) => (
                    <TableRow key={flight._id} className={cn(
                      deletingId === flight._id && "bg-destructive/10"
                    )}>
                      <TableCell className="font-medium text-foreground">{flight.departureDate}</TableCell>
                      <TableCell>{flight.departureTime}</TableCell>
                      <TableCell>
                        <span className="rounded-md bg-primary/10 px-2 py-0.5 text-sm font-medium text-primary">
                          {flight.flightNumber}
                        </span>
                      </TableCell>
                      <TableCell>{flight.groupRep}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => openEditDialog(flight)}
                            className="h-8 w-8 text-muted-foreground hover:text-primary"
                            disabled={isPending}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>

                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-destructive"
                            onClick={() => setDeletingId(flight._id)}
                            disabled={isPending}
                          >
                            
                            <Trash2 className="h-4 w-4" />
                            
                            <span className="sr-only">Delete flight</span>
                          </Button>

                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div> 

             {/* Mobile Cards */}
            <div className="flex flex-col gap-3 md:hidden">
              {flights && flights?.map((flight, i) => (
                <div
                  key={`${flight.flightNumber}-${i}`}
                  className="flex items-start justify-between rounded-lg border border-border bg-background p-4"
                >
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {flight.departureDate}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-foreground">
                      {flight.departureTime}
                    </p>
                    <span className="mt-1 inline-flex items-center rounded-md bg-primary/10 px-2 py-0.5 text-sm font-medium text-primary">
                      {flight.flightNumber}
                    </span>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {flight.groupRep}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-col gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground hover:text-primary"
                      disabled={isPending}
                      onClick={() => openEditDialog(flight)}
                    >
                      <Pencil className="h-4 w-4" />
                      <span className="sr-only">Edit flight</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground hover:text-destructive"
                      onClick={() => setDeletingId(flight._id)}
                      disabled={isPending}
                    >
                      <Trash2 className="h-4 w-4" />

                      <span className="sr-only">Delete flight</span>
                    </Button>

                  </div>
                </div>
              ))}
            </div>
          
          </>
        )}

        <AlertDialog open={deletingId !== null}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Remove this flight?
              </AlertDialogTitle>
              <AlertDialogDescription>
                {/* This will permanently remove flight
                {flight.flightNumber} on {flight.departureDate}
                from the schedule. */}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleDelete}
                className="bg-destructive"
                disabled={isPending}
              >
                {isPending && deletingId  ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Removing...</>
                ) : "Remove"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* Add / Edit Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {mode === "add" ? "Add New Flight" : "Edit Flight"}
              </DialogTitle>
              <DialogDescription>
                {mode === "add"
                  ? "Enter new flight details."
                  : "Update flight information."}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              {Object.entries(form).map(([key, value]) => (
                <div key={key}>
                  <Label>{key}</Label>
                  <Input
                    value={value}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        [key]: e.target.value,
                      }))
                    }
                    disabled={isPending}
                  />
                </div>
              ))}

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
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSubmit} disabled={isPending}>
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  "Save"
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

      </CardContent>
    </Card>
  );
}
"use client";

import { use, useState, useTransition } from "react";
import {
  Trash2,
  Pencil,
  Loader2,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
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
import {
  deleteFlight,
  updateFlight,
  addFlight,
} from "@/app/(root)/admin/actions";

import { cn } from "@/lib/utils";
import { useFlightDialog } from "./flight-provider";

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
  const flights = flightRes.success ? flightRes.data : [];

  const {
    dialogOpen,
    mode,
    editingId,
    closeDialog,
    openEditDialog,
  } = useFlightDialog();

  const [form, setForm] = useState(EMPTY_FORM);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const [isPending, startTransition] = useTransition();

  /* ---------------- OPEN EDIT ---------------- */

  function handleEdit(flight: Flight) {
    setForm({
      departureDate: flight.departureDate,
      departureTime: flight.departureTime,
      flightNumber: flight.flightNumber,
      groupRep: flight.groupRep,
    });
    openEditDialog(flight._id);
  }

  /* ---------------- SUBMIT ---------------- */

  function handleSubmit() {
    setMessage(null);

    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.set(k, v));

    startTransition(async () => {
      const result =
        mode === "add"
          ? await addFlight(fd)
          : await updateFlight(editingId!, fd);

      if (result.success) {
        setMessage({
          type: "success",
          text:
            mode === "add"
              ? "Flight added successfully."
              : "Flight updated successfully.",
        });

        setTimeout(() => {
          closeDialog();
          setForm(EMPTY_FORM);
          setMessage(null);
        }, 800);
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
    if (!deletingId) return;

    startTransition(async () => {
      const result = await deleteFlight(deletingId);
      if (result.success) {
        setDeletingId(null);
      }
    });
  }

  /* ---------------- RENDER ---------------- */

  if (flights.length === 0) {
    return (
      <p className="py-8 text-center text-sm text-muted-foreground">
        No flights added yet.
      </p>
    );
  }

  return (
    <>
      {/* Desktop Table */}
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Departure Date</TableHead>
              <TableHead>Departure Time</TableHead>
              <TableHead>Flight Number</TableHead>
              <TableHead>Group Rep</TableHead>
              <TableHead className="w-[100px]" />
            </TableRow>
          </TableHeader>

          <TableBody>
            {flights.map((flight) => (
              <TableRow
                key={flight._id}
                className={cn(
                  deletingId === flight._id && "bg-destructive/10"
                )}
              >
                <TableCell>{flight.departureDate}</TableCell>
                <TableCell>{flight.departureTime}</TableCell>
                <TableCell>
                  <span className="rounded-md bg-primary/10 px-2 py-0.5 text-sm font-medium text-primary">
                    {flight.flightNumber}
                  </span>
                </TableCell>
                <TableCell>{flight.groupRep}</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => handleEdit(flight)}
                      disabled={isPending}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => setDeletingId(flight._id)}
                      disabled={isPending}
                    >
                      <Trash2 className="h-4 w-4" />
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
                  onClick={() => handleEdit(flight)}
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

      {/* DELETE CONFIRM */}
      <AlertDialog open={deletingId !== null}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove this flight?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isPending}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Removing...
                </>
              ) : (
                "Remove"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* ADD / EDIT DIALOG */}
      <Dialog open={dialogOpen} onOpenChange={closeDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {mode === "add" ? "Add New Flight" : "Edit Flight"}
            </DialogTitle>
            <DialogDescription>
              {mode === "add"
                ? "Enter flight details."
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
                    setForm((p) => ({ ...p, [key]: e.target.value }))
                  }
                  disabled={isPending}
                />
              </div>
            ))}

            {message && (
              <div
                className={cn(
                  "flex items-center gap-2 rounded-md px-3 py-2 text-sm",
                  message.type === "success"
                    ? "bg-primary/10 text-primary"
                    : "bg-destructive/10 text-destructive"
                )}
              >
                {message.type === "success" && (
                  <CheckCircle2 className="h-4 w-4" />
                )}
                {message.text}
              </div>
            )}
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={closeDialog}>
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
    </>
  );
}
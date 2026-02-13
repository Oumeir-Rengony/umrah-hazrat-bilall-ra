"use client";

import { useState, useTransition } from "react";
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
import type { Flight } from "@/app/admin/actions";
import { deleteFlight, updateFlight, addFlight } from "@/app/admin/actions";
import { useRouter } from "next/navigation";

export function AdminFlightTable({
  initialFlights,
}: {
  initialFlights: Flight[];
}) {
  const [flights, setFlights] = useState(initialFlights);
  const [isPending, startTransition] = useTransition();
  const [deletingIndex, setDeletingIndex] = useState<number | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [dialogMode, setDialogMode] = useState<"add" | "edit">("edit");
  const [form, setForm] = useState<Flight>({
    departureDate: "",
    departureTime: "",
    flightNumber: "",
    groupRep: "",
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const router = useRouter();

  const [editForm, setEditForm] = useState<Flight>({
    departureDate: "",
    departureTime: "",
    flightNumber: "",
    groupRep: "",
  });
  const [editOpen, setEditOpen] = useState(false);
  const [editMessage, setEditMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  function openAddDialog() {
    setDialogMode("add");
    setEditingIndex(null);
    setForm({
      departureDate: "",
      departureTime: "",
      flightNumber: "",
      groupRep: "",
    });
    setMessage(null);
    setDialogOpen(true);
  }

  function openEditDialog(index: number) {
    const flight = flights[index];
    setDialogMode("edit");
    setEditingIndex(index);
    setForm({ ...flight });
    setMessage(null);
    setDialogOpen(true);
  }

  function handleDialogSubmit() {
    setMessage(null);
    const fd = new FormData();
    fd.set("departureDate", form.departureDate);
    fd.set("departureTime", form.departureTime);
    fd.set("flightNumber", form.flightNumber);
    fd.set("groupRep", form.groupRep);

    startTransition(async () => {
      if (dialogMode === "edit" && editingIndex !== null) {
        const result = await updateFlight(editingIndex, fd);
        if (result.success) {
          setFlights((prev) =>
            prev.map((f, i) => (i === editingIndex ? { ...form } : f)),
          );
          setMessage({ type: "success", text: "Flight updated successfully." });
          router.refresh();
          setTimeout(() => {
            setDialogOpen(false);
            setEditingIndex(null);
            setMessage(null);
          }, 1000);
        } else {
          setMessage({
            type: "error",
            text: result.error || "Something went wrong.",
          });
        }
      } else if (dialogMode === "add") {
        const result = await addFlight(fd);
        if (result.success) {
          setFlights((prev) => [...prev, form]);
          setMessage({ type: "success", text: "Flight added successfully." });
          router.refresh();
          setTimeout(() => {
            setDialogOpen(false);
            setMessage(null);
          }, 1000);
        } else {
          setMessage({
            type: "error",
            text: result.error || "Something went wrong.",
          });
        }
      }
    });
  }

  function handleDelete(index: number) {
    setDeletingIndex(index);
    startTransition(async () => {
      const result = await deleteFlight(index);
      if (result.success) {
        setFlights((prev) => prev.filter((_, i) => i !== index));
        router.refresh();
      }
      setDeletingIndex(null);
    });
  }

  function handleEditSubmit() {
    setEditMessage(null);
    const fd = new FormData();
    fd.set("departureDate", editForm.departureDate);
    fd.set("departureTime", editForm.departureTime);
    fd.set("flightNumber", editForm.flightNumber);
    fd.set("groupRep", editForm.groupRep);

    startTransition(async () => {
      if (editingIndex !== null) {
        const result = await updateFlight(editingIndex, fd);
        if (result.success) {
          setFlights((prev) =>
            prev.map((f, i) => (i === editingIndex ? { ...editForm } : f)),
          );
          setEditMessage({ type: "success", text: "Flight updated successfully." });
          router.refresh();
          setTimeout(() => {
            setEditOpen(false);
            setEditingIndex(null);
            setEditMessage(null);
          }, 1000);
        } else {
          setEditMessage({
            type: "error",
            text: result.error || "Something went wrong.",
          });
        }
      }
    });
  }

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
          <Button
            onClick={openAddDialog}
            className="font-medium"
            disabled={isPending}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add New Flight
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {flights.length === 0 ? (
          <p className="py-8 text-center text-sm text-muted-foreground">
            No flights added yet. Use the form below to add your first flight.
          </p>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block">
              <Table>
                <TableHeader>
                  <TableRow className="border-border hover:bg-transparent">
                    <TableHead className="text-foreground">
                      Departure Date
                    </TableHead>
                    <TableHead className="text-foreground">
                      Departure Time
                    </TableHead>
                    <TableHead className="text-foreground">
                      Flight Number
                    </TableHead>
                    <TableHead className="text-foreground">
                      Group Representative
                    </TableHead>
                    <TableHead className="w-[100px] text-foreground">
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {flights.map((flight, i) => (
                    <TableRow key={`${flight.flightNumber}-${i}`} className="border-border">
                      <TableCell className="font-medium text-foreground">
                        {flight.departureDate}
                      </TableCell>
                      <TableCell className="text-foreground">
                        {flight.departureTime}
                      </TableCell>
                      <TableCell>
                        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-0.5 text-sm font-medium text-primary">
                          {flight.flightNumber}
                        </span>
                      </TableCell>
                      <TableCell className="text-foreground">
                        {flight.groupRep}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground hover:text-primary"
                      disabled={isPending}
                      onClick={() => openEditDialog(i)}
                    >
                      <Pencil className="h-4 w-4" />
                      <span className="sr-only">Edit flight</span>
                    </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-muted-foreground hover:text-destructive"
                                disabled={isPending}
                              >
                                {isPending && deletingIndex === i ? (
                                  <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                  <Trash2 className="h-4 w-4" />
                                )}
                                <span className="sr-only">Delete flight</span>
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Remove this flight?
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  This will permanently remove flight{" "}
                                  {flight.flightNumber} on{" "}
                                  {flight.departureDate} from the schedule.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => handleDelete(i)}
                                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                >
                                  Remove
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Mobile Cards */}
            <div className="flex flex-col gap-3 md:hidden">
              {flights.map((flight, i) => (
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
                      onClick={() => setEditOpen(true)}
                    >
                      <Pencil className="h-4 w-4" />
                      <span className="sr-only">Edit flight</span>
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-destructive"
                          disabled={isPending}
                        >
                          {isPending && deletingIndex === i ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Trash2 className="h-4 w-4" />
                          )}
                          <span className="sr-only">Delete flight</span>
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Remove this flight?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This will permanently remove flight{" "}
                            {flight.flightNumber} on {flight.departureDate}{" "}
                            from the schedule.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDelete(i)}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                          >
                            Remove
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Add/Edit Flight Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-foreground">
                {dialogMode === "add" ? "Add New Flight" : "Edit Flight Details"}
              </DialogTitle>
              <DialogDescription>
                {dialogMode === "add"
                  ? "Fill in the details below to add a new departure to the schedule."
                  : "Update the departure information for this flight."}
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-4 py-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="dialog-departureDate" className="text-foreground">
                  Departure Date
                </Label>
                <Input
                  id="dialog-departureDate"
                  value={form.departureDate}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      departureDate: e.target.value,
                    }))
                  }
                  placeholder="e.g. 15 Mar 2026"
                  disabled={isPending}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="dialog-departureTime" className="text-foreground">
                  Departure Time
                </Label>
                <Input
                  id="dialog-departureTime"
                  value={form.departureTime}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      departureTime: e.target.value,
                    }))
                  }
                  placeholder="e.g. 08:30"
                  disabled={isPending}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="dialog-flightNumber" className="text-foreground">
                  Flight Number
                </Label>
                <Input
                  id="dialog-flightNumber"
                  value={form.flightNumber}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      flightNumber: e.target.value,
                    }))
                  }
                  placeholder="e.g. SV 812"
                  disabled={isPending}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="dialog-groupRep" className="text-foreground">
                  Group Representative
                </Label>
                <Input
                  id="dialog-groupRep"
                  value={form.groupRep}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      groupRep: e.target.value,
                    }))
                  }
                  placeholder="e.g. Sheikh Ahmad Al-Farsi"
                  disabled={isPending}
                />
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
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setDialogOpen(false)}
                disabled={isPending}
              >
                Cancel
              </Button>
              <Button onClick={handleDialogSubmit} disabled={isPending}>
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {dialogMode === "add" ? "Adding..." : "Saving..."}
                  </>
                ) : (
                  <>
                    {dialogMode === "add" ? (
                      <>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Flight
                      </>
                    ) : (
                      "Save Changes"
                    )}
                  </>
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}

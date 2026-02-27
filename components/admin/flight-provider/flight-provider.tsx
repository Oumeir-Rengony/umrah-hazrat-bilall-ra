// components/admin/flight-table/flight-provider.tsx
"use client";

import React, { createContext, useContext, useState } from "react";

type FlightDialogMode = "add" | "edit";

type FlightContextType = {
  openAddDialog: () => void;
  openEditDialog: (id: string) => void;
  dialogOpen: boolean;
  mode: FlightDialogMode;
  editingId: string | null;
  closeDialog: () => void;
};

const FlightContext = createContext<FlightContextType | null>(null);

export function FlightProvider({ children }: { children: React.ReactNode }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [mode, setMode] = useState<FlightDialogMode>("add");
  const [editingId, setEditingId] = useState<string | null>(null);

  function openAddDialog() {
    setMode("add");
    setEditingId(null);
    setDialogOpen(true);
  }

  function openEditDialog(id: string) {
    setMode("edit");
    setEditingId(id);
    setDialogOpen(true);
  }

  function closeDialog() {
    setDialogOpen(false);
    setEditingId(null);
  }

  return (
    <FlightContext.Provider
      value={{
        openAddDialog,
        openEditDialog,
        dialogOpen,
        mode,
        editingId,
        closeDialog,
      }}
    >
      {children}
    </FlightContext.Provider>
  );
}

export function useFlightDialog() {
  const ctx = useContext(FlightContext);
  if (!ctx) {
    throw new Error("useFlightDialog must be used within FlightProvider");
  }
  return ctx;
}
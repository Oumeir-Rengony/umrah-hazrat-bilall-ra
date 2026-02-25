"use client";

import { useState, useTransition } from "react";
import { Building2, CheckCircle2, Loader2 } from "lucide-react";
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
import type { Hotel } from "@/app/(root)/admin/actions";
import { updateHotel } from "@/app/(root)/admin/actions";
import { useRouter } from "next/navigation";

interface HotelEditorProps {
  makkahHotel: Hotel;
  madinahHotel: Hotel;
}

export function HotelEditor({ makkahHotel, madinahHotel }: HotelEditorProps) {
  const [isPending, startTransition] = useTransition();
  const [makkahForm, setMakkahForm] = useState(makkahHotel);
  const [madinahForm, setMadinahForm] = useState(madinahHotel);
  const [makkahMessage, setMakkahMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [madinahMessage, setMadinahMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const router = useRouter();

  function handleMakkahSubmit() {
    setMakkahMessage(null);
    const fd = new FormData();
    fd.set("name", makkahForm.name);
    fd.set("address", makkahForm.address);
    fd.set("lat", makkahForm.lat.toString());
    fd.set("lng", makkahForm.lng.toString());

    startTransition(async () => {
      const result = await updateHotel("makkah", fd);
      if (result.success) {
        setMakkahMessage({ type: "success", text: "Makkah hotel updated." });
        router.refresh();
        setTimeout(() => setMakkahMessage(null), 3000);
      } else {
        setMakkahMessage({
          type: "error",
          text: result.error || "Something went wrong.",
        });
      }
    });
  }

  function handleMadinahSubmit() {
    setMadinahMessage(null);
    const fd = new FormData();
    fd.set("name", madinahForm.name);
    fd.set("address", madinahForm.address);
    fd.set("lat", madinahForm.lat.toString());
    fd.set("lng", madinahForm.lng.toString());

    startTransition(async () => {
      const result = await updateHotel("madinah", fd);
      if (result.success) {
        setMadinahMessage({ type: "success", text: "Madinah hotel updated." });
        router.refresh();
        setTimeout(() => setMadinahMessage(null), 3000);
      } else {
        setMadinahMessage({
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
          <Building2 className="h-5 w-5 text-primary" />
          Hotel Locations
        </CardTitle>
        <CardDescription>
          Update hotel names and addresses for Makkah and Madinah.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        {/* Makkah Hotel */}
        <div className="space-y-4 rounded-lg border border-border bg-background p-4">
          <h3 className="font-semibold text-foreground">Makkah Hotel</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="makkah-name" className="text-foreground">
                Hotel Name
              </Label>
              <Input
                id="makkah-name"
                value={makkahForm.name}
                onChange={(e) =>
                  setMakkahForm((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="e.g. Nawarat As Shams 3"
                disabled={isPending}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="makkah-address" className="text-foreground">
                Address
              </Label>
              <Input
                id="makkah-address"
                value={makkahForm.address}
                onChange={(e) =>
                  setMakkahForm((prev) => ({ ...prev, address: e.target.value }))
                }
                placeholder="e.g. Ibrahim Al Khalil St, Makkah"
                disabled={isPending}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="makkah-lat" className="text-foreground">
                Latitude
              </Label>
              <Input
                id="makkah-lat"
                type="number"
                step="any"
                value={makkahForm.lat}
                onChange={(e) =>
                  setMakkahForm((prev) => ({
                    ...prev,
                    lat: Number.parseFloat(e.target.value) || 0,
                  }))
                }
                placeholder="e.g. 21.4195"
                disabled={isPending}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="makkah-lng" className="text-foreground">
                Longitude
              </Label>
              <Input
                id="makkah-lng"
                type="number"
                step="any"
                value={makkahForm.lng}
                onChange={(e) =>
                  setMakkahForm((prev) => ({
                    ...prev,
                    lng: Number.parseFloat(e.target.value) || 0,
                  }))
                }
                placeholder="e.g. 39.8271"
                disabled={isPending}
              />
            </div>
          </div>
          {makkahMessage && (
            <div
              className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm ${
                makkahMessage.type === "success"
                  ? "bg-primary/10 text-primary"
                  : "bg-destructive/10 text-destructive"
              }`}
            >
              {makkahMessage.type === "success" && (
                <CheckCircle2 className="h-4 w-4" />
              )}
              {makkahMessage.text}
            </div>
          )}
          <Button onClick={handleMakkahSubmit} disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Updating...
              </>
            ) : (
              "Update Makkah Hotel"
            )}
          </Button>
        </div>

        {/* Madinah Hotel */}
        <div className="space-y-4 rounded-lg border border-border bg-background p-4">
          <h3 className="font-semibold text-foreground">Madinah Hotel</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="madinah-name" className="text-foreground">
                Hotel Name
              </Label>
              <Input
                id="madinah-name"
                value={madinahForm.name}
                onChange={(e) =>
                  setMadinahForm((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="e.g. Diwan Al Madinah"
                disabled={isPending}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="madinah-address" className="text-foreground">
                Address
              </Label>
              <Input
                id="madinah-address"
                value={madinahForm.address}
                onChange={(e) =>
                  setMadinahForm((prev) => ({ ...prev, address: e.target.value }))
                }
                placeholder="e.g. King Fahd Branch Rd, Madinah"
                disabled={isPending}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="madinah-lat" className="text-foreground">
                Latitude
              </Label>
              <Input
                id="madinah-lat"
                type="number"
                step="any"
                value={madinahForm.lat}
                onChange={(e) =>
                  setMadinahForm((prev) => ({
                    ...prev,
                    lat: Number.parseFloat(e.target.value) || 0,
                  }))
                }
                placeholder="e.g. 24.4732"
                disabled={isPending}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="madinah-lng" className="text-foreground">
                Longitude
              </Label>
              <Input
                id="madinah-lng"
                type="number"
                step="any"
                value={madinahForm.lng}
                onChange={(e) =>
                  setMadinahForm((prev) => ({
                    ...prev,
                    lng: Number.parseFloat(e.target.value) || 0,
                  }))
                }
                placeholder="e.g. 39.6108"
                disabled={isPending}
              />
            </div>
          </div>
          {madinahMessage && (
            <div
              className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm ${
                madinahMessage.type === "success"
                  ? "bg-primary/10 text-primary"
                  : "bg-destructive/10 text-destructive"
              }`}
            >
              {madinahMessage.type === "success" && (
                <CheckCircle2 className="h-4 w-4" />
              )}
              {madinahMessage.text}
            </div>
          )}
          <Button onClick={handleMadinahSubmit} disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Updating...
              </>
            ) : (
              "Update Madinah Hotel"
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

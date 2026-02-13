"use client";

import { useState, useTransition } from "react";
import { AlertTriangle, Loader2, CheckCircle2, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { updateReminder } from "@/app/admin/actions";
import { useRouter } from "next/navigation";

export function ReminderEditor({
  initialReminder,
}: {
  initialReminder: string;
}) {
  const [reminder, setReminder] = useState(initialReminder);
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const router = useRouter();

  function handleSubmit(formData: FormData) {
    setMessage(null);
    startTransition(async () => {
      const result = await updateReminder(formData);
      if (result.success) {
        setMessage({ type: "success", text: "Reminder updated successfully." });
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
          <AlertTriangle className="h-5 w-5 text-primary" />
          Edit Reminder
        </CardTitle>
        <CardDescription>
          Update the reminder message shown to pilgrims on the flight schedule
          page.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="reminder" className="text-foreground">
              Reminder Message
            </Label>
            <Textarea
              id="reminder"
              name="reminder"
              value={reminder}
              onChange={(e) => setReminder(e.target.value)}
              rows={4}
              required
              disabled={isPending}
              className="resize-y"
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

          <div>
            <Button type="submit" disabled={isPending} className="font-medium">
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save Reminder
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

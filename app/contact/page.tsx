import type { Metadata } from "next";
import Image from "next/image";
import { Phone, User, Download, QrCode } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { guides } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Your Guides",
  description:
    "Contact information for your Umrah group guides. Call your guide instantly.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Your Guides"
        description="Need help? Your group guides are available to assist you at any time. Tap 'Call Now' to reach them directly."
      />

      {/* Guide Cards Section */}
      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
              Your Group Guides
            </h2>
            <p className="mt-2 text-muted-foreground">
              Available 24/7 to assist you during your journey
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => {
              const initials = guide.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2);

              return (
                <Card
                  key={guide.name}
                  className="border-border bg-card transition-shadow hover:shadow-md"
                >
                  <CardHeader className="flex flex-row items-center gap-4 pb-3">
                    <Avatar className="h-12 w-12 bg-primary/10">
                      <AvatarFallback className="bg-primary/10 text-sm font-semibold text-primary">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-base text-foreground">
                        {guide.name}
                      </CardTitle>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {guide.role}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-3.5 w-3.5" />
                        <span>{guide.phone}</span>
                      </div>
                      <Button asChild size="sm">
                        <a href={`tel:${guide.phone}`}>
                          <Phone className="mr-1.5 h-3.5 w-3.5" />
                          Call Now
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <Card className="border-border bg-card">
            <CardHeader className="text-center">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <QrCode className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground lg:text-2xl">
                Quick Access QR Code
              </CardTitle>
              <CardDescription className="mx-auto mt-2 max-w-lg">
                Share this QR code with fellow pilgrims. Scanning it will instantly open this contact page with all guide phone numbers.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-6 pb-8">
              <div className="relative">
                <div className="overflow-hidden rounded-xl border-4 border-primary/20 bg-white p-4 shadow-lg">
                  <img
                    src="/images/qr.png"
                    alt="QR Code to Contact Page"
                    width={240}
                    height={240}
                    className="h-60 w-60"
                    loading="eager"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="font-medium">
                  <a
                    href="/images/qr.png"
                    download="umrah-contact-qr.png"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download QR Code
                  </a>
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Save and share with your group
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}

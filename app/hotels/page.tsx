import Link from "next/link";
import { MapPin, Navigation, Building2 } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { hotels } from "@/lib/data";
import { cn } from "@/lib/utils";


// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { city } = await params;
//   const hotel = hotels[city as keyof typeof hotels];
//   if (!hotel) return { title: "Not Found" };
//   return {
//     title: `${hotel.name} - ${hotel.city} Hotel`,
//     description: hotel.description,
//   };
// }

export default async function HotelPage() {

  return (
    <>
    {
      hotels.map((hotel, index) => <Hotel key={hotel.city} index={index} hotel={hotel} />)
    }
    </>
  );
}


export function Hotel({
   hotel,
   index,
}: {
   hotel: any;
   index: number
}) {
   const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${hotel.lat},${hotel.lng}`;
   const embedUrl = `https://www.google.com/maps?q=${hotel.lat},${hotel.lng}&z=16&output=embed`;
   return (
      <div id={hotel.city}>
        <PageHeader
          title={`${hotel.name}`}
          description={`Your accommodation in ${hotel.city} during your Umrah journey.`}
          className={cn("bg-[unset]", index > 0 ? "border-t": "")}
        />
        <section className="bg-background py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Map */}
                <div className="lg:col-span-2">
                    <Card className="overflow-hidden border-border">
                      <div className="aspect-[16/10] w-full">
                          <iframe
                            src={embedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`Map showing ${hotel.name} in ${hotel.city}`}
                          />
                      </div>
                    </Card>
                </div>

                {/* Hotel Info */}
                <div className="flex flex-col gap-4">
                    <Card className="border-border bg-card">
                      <CardHeader>
                          <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <Building2 className="h-5 w-5 text-primary" />
                          </div>
                          <CardTitle className="text-lg text-foreground">
                            {hotel.name}
                          </CardTitle>
                          <CardDescription>{hotel.city}, Saudi Arabia</CardDescription>
                      </CardHeader>
                      <CardContent className="flex flex-col gap-4">
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {hotel.description}
                          </p>
                          <div className="flex items-start gap-2 text-sm text-muted-foreground">
                            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{hotel.address}</span>
                          </div>
                          <Button asChild className="w-full">
                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Navigation className="mr-2 h-4 w-4" />
                                Open in Google Maps
                            </a>
                          </Button>
                      </CardContent>
                    </Card>

                    {/* Quick links to other hotel */}
                    <Card className="border-border bg-card">
                      <CardHeader className="pb-3">
                          <CardTitle className="text-sm font-medium text-foreground">
                            Other Hotel
                          </CardTitle>
                      </CardHeader>
                      <CardContent>
                          {hotel.other.city && (
                            <Link
                              href={`#${hotel.other.city}`}
                                className="flex items-center gap-2 text-sm text-primary hover:underline"
                            >
                                <MapPin className="h-3.5 w-3.5" />
                                {hotel.other.name} - {hotel.other.city}
                            </Link>
                          )
                        }
                      </CardContent>
                    </Card>
                </div>
              </div>
          </div>
        </section>
      </div>
   )
}

import Link from "next/link";
import Image from "next/image";
import { Plane, MapPin, Phone, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const quickLinks = [
  {
    title: "Flight Schedule",
    description:
      "View departure times, flight numbers, and group representatives",
    href: "/flight-schedule",
    icon: Plane,
  },
  {
    title: "Ziyaraah",
    description:
      "Explore holy sites in Makkah, Madinah, Taif, and Badr",
    href: "/ziyaraah/makkah",
    icon: BookOpen,
  },
  {
    title: "Contact Guides",
    description: "Reach your group guides instantly with one tap",
    href: "/contact",
    icon: Phone,
  },
  {
    title: "Hotel Locations",
    description: "Find your hotel on the map with directions",
    href: "/hotels/makkah",
    icon: MapPin,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-kaaba.jpg"
            alt="Masjid al-Haram, Makkah"
            className="object-cover h-full w-full"
            loading="eager"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center lg:px-8 lg:py-36">
          <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/80">
            Bismillah ar-Rahman ar-Rahim
          </p>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight text-primary-foreground lg:text-6xl">
            Your Trusted Companion for a Blessed Umrah
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/85 lg:text-lg">
            Everything you need for your pilgrimage journey in one place.
            Flight details, holy site guides, hotel locations, and instant
            access to your group guides.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="font-medium">
              <Link href="/flight-schedule">View Flight Schedule</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 bg-transparent font-medium text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="/contact">Contact Your Guide</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
              Welcome, Dear Pilgrim
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
              This application has been designed to make your Umrah journey as
              smooth and spiritually enriching as possible. Here you will find
              all the information you need, from flight schedules and hotel
              directions to detailed guides of the holy sites you will visit.
              May Allah accept your Umrah and grant you a journey filled with
              peace and blessings.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="bg-card py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
              Quick Access
            </h2>
            <p className="mt-2 text-muted-foreground">
              Everything you need at your fingertips
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((link) => (
              <Link key={link.title} href={link.href} className="group">
                <Card className="h-full border-border bg-background transition-all duration-200 hover:border-primary/30 hover:shadow-md">
                  <CardHeader className="pb-3">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <link.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-foreground group-hover:text-primary">
                      {link.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {link.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Preview */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
              Explore the Holy Lands
            </h2>
            <p className="mt-2 text-muted-foreground">
              Discover the sacred places you will visit during your journey
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Makkah",
                href: "/ziyaraah/makkah",
                image: "/images/makkah-city.jpg",
              },
              {
                name: "Madinah",
                href: "/ziyaraah/madinah",
                image: "/images/madinah-mosque.jpg",
              },
              {
                name: "Taif",
                href: "/ziyaraah/taif",
                image: "/images/taif.jpg",
              },
              {
                name: "Badr",
                href: "/ziyaraah/badr",
                image: "/images/badr.jpg",
              },
            ].map((city) => (
              <Link key={city.name} href={city.href} className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <div className="aspect-[4/3]">
                    <img
                      src={city.image || "/placeholder.svg"}
                      alt={city.name}
                      className="object-cover h-full w-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-end bg-foreground/30 transition-colors group-hover:bg-foreground/40">
                    <div className="w-full p-4">
                      <h3 className="text-xl font-bold text-primary-foreground">
                        {city.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-primary-foreground lg:text-3xl">
            Need Assistance?
          </h2>
          <p className="mt-3 text-base text-primary-foreground/80">
            Your group guides are just a call away. Do not hesitate to reach
            out at any time.
          </p>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="mt-6 font-medium"
          >
            <Link href="/contact">Contact Your Guides</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

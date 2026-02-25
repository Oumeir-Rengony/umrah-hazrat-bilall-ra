import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ziyaraahData } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return ziyaraahData.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = ziyaraahData.find((c) => c.slug === citySlug);
  if (!city) return { title: "Not Found" };
  return {
    title: `Ziyaraah - ${city.name}`,
    description: `Explore the holy sites and places to visit in ${city.name} during your Umrah journey.`,
  };
}

export default async function ZiyaraahCityPage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = ziyaraahData.find((c) => c.slug === citySlug);

  if (!city) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          { city?.image && 
            <img
              src={city.image || "/placeholder.svg"}
              alt={city.name}
              className="object-cover h-full w-full"
              loading="eager"
            />
          }
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
            <Link href="/" className="hover:text-primary-foreground">
              Home
            </Link>
            <span>/</span>
            <span>Ziyaraah</span>
            <span>/</span>
            <span className="text-primary-foreground">{city.name}</span>
          </div>
          <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-primary-foreground lg:text-5xl">
            Ziyaraah in {city.name}
          </h1>
          <p className="mt-3 max-w-xl text-base text-primary-foreground/80">
            Explore the sacred sites and historic places to visit during your
            time in {city.name}.
          </p>
        </div>
      </div>

      {/* Categories and Places */}
      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {city.categories.map((category) => (
            <div key={category.slug} className="mb-12 last:mb-0">
              <div className="mb-6 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground lg:text-2xl">
                  {category.name}
                </h2>
                <Badge variant="secondary" className="text-xs">
                  {category.places.length}{" "}
                  {category.places.length === 1 ? "place" : "places"}
                </Badge>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.places.map((place) => (
                  <Link
                    key={place.slug}
                    href={`/ziyaraah/${city.slug}/${place.slug}`}
                    className="group"
                  >
                    <Card className="h-full overflow-hidden border-border bg-card transition-all duration-200 hover:border-primary/30 hover:shadow-md">
                      <div className="relative aspect-[16/9] overflow-hidden">
                      {
                        place?.image &&
                        <img
                          src={place.image || "/placeholder.svg"}
                          alt={place.name}
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      }
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base text-foreground group-hover:text-primary">
                          {place.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="line-clamp-2 text-sm leading-relaxed">
                          {place.description}
                        </CardDescription>
                        <div className="mt-3 flex items-center gap-1 text-sm font-medium text-primary">
                          Read more
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

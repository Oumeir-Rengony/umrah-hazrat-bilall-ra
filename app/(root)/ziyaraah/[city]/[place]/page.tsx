import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ziyaraahData } from "@/lib/data";

interface Props {
  params: Promise<{ city: string; place: string }>;
}

export async function generateStaticParams() {
  const paths: { city: string; place: string }[] = [];
  for (const city of ziyaraahData) {
    for (const cat of city.categories) {
      for (const place of cat.places) {
        paths.push({ city: city.slug, place: place.slug });
      }
    }
  }
  return paths;
}

function findPlace(citySlug: string, placeSlug: string) {
  const city = ziyaraahData.find((c) => c.slug === citySlug);
  if (!city) return null;
  for (const cat of city.categories) {
    const place = cat.places.find((p) => p.slug === placeSlug);
    if (place) return { city, category: cat, place };
  }
  return null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug, place: placeSlug } = await params;
  const result = findPlace(citySlug, placeSlug);
  if (!result) return { title: "Not Found" };
  return {
    title: `${result.place.name} - ${result.city.name}`,
    description: result.place.description.slice(0, 160),
  };
}

export default async function ZiyaraahPlacePage({ params }: Props) {
  const { city: citySlug, place: placeSlug } = await params;
  const result = findPlace(citySlug, placeSlug);

  if (!result) {
    notFound();
  }

  const { city, category, place } = result;

  return (
    <>
      {/* Hero Image */}
      <div className="relative overflow-hidden flex flex-row-reverse max-w-[1100px] mx-auto mt-20">
        <div className="inset-0">
          {
            (place?.image && !place?.image.includes("placehold")) &&
            <img
              src={place.image || "/placeholder.svg"}
              alt={place.name}
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
            <Link
              href={`/ziyaraah/${city.slug}`}
              className="hover:text-primary-foreground"
            >
              {city.name}
            </Link>
            <span>/</span>
            <span className="text-primary-foreground">{place.name}</span>
          </div>
          <h1 className="mt-3 max-w-2xl text-balance text-3xl font-bold tracking-tight text-primary-foreground lg:text-5xl">
            {place.name}
          </h1>
          <p className="mt-2 text-sm text-primary-foreground/70">
            {category.name} - {city.name}
          </p>
        </div>
      </div>

      {/* Article Content */}
      <article className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-base leading-relaxed text-foreground lg:text-lg lg:leading-8" dangerouslySetInnerHTML={{__html: place.description}}/>
          </div>

          <div className="mt-10 border-border pt-6">
            <Button asChild variant="outline">
              <Link href={`/ziyaraah/${city.slug}`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to {city.name} Ziyaraah
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
}

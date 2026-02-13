import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { douaCategories } from "@/lib/data";
import { DouaCarousel } from "@/components/doua-carousel";

export const metadata: Metadata = {
  title: "Du'a Collection",
  description:
    "Essential supplications (Du'a) for your Umrah journey including Tawaf, Sa'i, Arafah, and travel.",
};

// const hajjDouas = douaCategories.filter((d) => d.category === "Hajj & Madinah");
// const voyageDouas = douaCategories.filter((d) => d.category === "Voyage");

export default function DouaPage() {
  return (
    <>
      <PageHeader
        title="Du'a Collection"
        description="Essential supplications for your Umrah journey. Swipe through the cards to explore each du'a category."
      />
      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Hajj & Makkah */}
          <div className="mb-12">
            <h2 className="mb-6 text-xl font-bold text-foreground lg:text-2xl">
              Hajj & Madinah
            </h2>
            <DouaCarousel items={douaCategories?.hajjMadinah} />
          </div>

          {/* Voyage */}
          <div>
            <h2 className="mb-6 text-xl font-bold text-foreground lg:text-2xl">
              Voyage
            </h2>
            <DouaCarousel items={douaCategories?.voyage} slideClassName="lg:basis-1/2"/>
          </div>
        </div>
      </section>
    </>
  );
}

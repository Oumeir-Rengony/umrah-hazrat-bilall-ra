// "use client";

// import { BookOpen } from "lucide-react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// interface DouaItem {
//   title: string;
//   description: string;
//   category: string;
// }

// export function DouaCarousel({ items }: { items: DouaItem[] }) {
//   return (
//     <Carousel
//       opts={{ align: "start", loop: true }}
//       className="mx-auto w-full max-w-5xl"
//     >
//       <CarouselContent>
//         {items.map((doua) => (
//           <CarouselItem
//             key={doua.title}
//             className="basis-full sm:basis-1/2 lg:basis-1/3"
//           >
//             <Card className="h-full border-border bg-card">
//               <CardHeader>
//                 <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
//                   <BookOpen className="h-5 w-5 text-primary" />
//                 </div>
//                 <CardTitle className="text-base text-foreground">
//                   {doua.title}
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <CardDescription className="text-sm leading-relaxed">
//                   {doua.description}
//                 </CardDescription>
//               </CardContent>
//             </Card>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   );
// }




"use client";

import * as React from "react";
import { BookOpen } from "lucide-react";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DouaItem {
  // title: string;
  // description: string;
  // category: string;
  imagePath: string;
}

export function DouaCarousel({ items, slideClassName }: { items: DouaItem[];  slideClassName?: string; }) {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [snapCount, setSnapCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setSnapCount(api.scrollSnapList().length);
    setSelectedIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true }}
      >
        <CarouselContent>
          {items.map((doua, index) => (
            <CarouselItem
              key={index}
              className={cn("basis-full sm:basis-1/2 lg:basis-1/3", slideClassName)}
            >
              <Card className="h-full border-border bg-card">
                {/* <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-base">
                    {doua.title}
                  </CardTitle>
                </CardHeader> */}
                <CardContent>
                  {/* <CardDescription className="text-sm leading-relaxed">
                    {doua.description}
                  </CardDescription> */}
                  <img src={doua.imagePath} />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <CarouselPrevious className="static translate-y-0 order-1" />

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 order-2">
            {Array.from({ length: snapCount }).map((_, index) => (
              <button
                key={index}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-all",
                  selectedIndex === index
                    ? "bg-primary scale-110"
                    : "bg-muted hover:bg-muted-foreground/40"
                )}
              />
            ))}
          </div>

          <CarouselNext className="static translate-y-0 order-3" />
        </div>

      </Carousel>
    </div> 
  );
}


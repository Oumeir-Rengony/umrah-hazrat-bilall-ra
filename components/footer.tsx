import { ActionResult, getHotels, Hotel as HotelType } from "@/app/(root)/admin/actions";
import Link from "next/link";

export async function Footer({
  hotelsPromise
}: {
  hotelsPromise: Promise<ActionResult<HotelType[]>>
}) {

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <img src="/images/logo.png" alt="Hajj/Umrah Guide Logo" className="w-16" />
              <span className="text-lg font-semibold text-foreground">
                Hazrat Bilall Institute
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Your trusted companion for a blessed Hajj/Umrah journey. We are here to
              guide and assist you every step of the way.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Quick Links
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              {[
                { name: "Flight Schedule", href: "/flight-schedule" },
                { name: "Contact Guides", href: "/contact" },
                { name: "Ziyaraah - Makkah", href: "/ziyaraah/makkah" },
                { name: "Ziyaraah - Madinah", href: "/ziyaraah/madinah" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hotels */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Hotel Locations
            </h3>
            <HotelLinks hotelsPromise={hotelsPromise} />
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-center text-xs text-muted-foreground">
            Bismillah ar-Rahman ar-Rahim. May Allah accept your Umrah.
          </p>
        </div>
      </div>
    </footer>
  );
}


async function HotelLinks({ hotelsPromise }: {  hotelsPromise: Promise<ActionResult<HotelType[]>> }) {

  const hotelsResult = await hotelsPromise;

  if(!hotelsResult.success || !hotelsResult.data) {
    return null;
  }

  const hotels = hotelsResult.data;

  return (
    <ul className="mt-3 flex flex-col gap-2">
      {hotels.map((link: HotelType) => (
        <li key={link.name}>
          <Link
            href={`/hotels#${link.city}`}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {link.name} - {link.city}
          </Link>
        </li>
      ))}
    </ul>
  );
}
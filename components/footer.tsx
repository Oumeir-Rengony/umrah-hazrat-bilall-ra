import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <img src="./images/logo.png" alt="Umrah Guide Logo" className="w-16" />
              <span className="text-lg font-semibold text-foreground">
                Hazrat Bilall Institute
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Your trusted companion for a blessed Umrah journey. We are here to
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
            <ul className="mt-3 flex flex-col gap-2">
              {[
                {
                  name: "Makkah - Nawarat As Shams 3",
                  href: "/hotels/makkah",
                },
                {
                  name: "Madinah - Diwan Al Madinah",
                  href: "/hotels/madinah",
                },
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

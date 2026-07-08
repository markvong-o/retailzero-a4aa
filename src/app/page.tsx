import Link from "next/link";

export default function LandingPage() {
  return (
    <div>
      {/* Hero section */}
      <section className="bg-[#191919] text-white py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Everyday essentials,{" "}
            <span className="text-[#B49BFC]">elevated.</span>
          </h1>
          <p className="mt-6 text-lg text-neutral-400 leading-relaxed">
            From the latest electronics to everyday wardrobe staples,
            RetailZero brings together the best of what you need. Throw in a
            few things you didn&apos;t know you did.
          </p>
          <Link
            href="/products"
            className="mt-10 inline-flex items-center justify-center rounded-md bg-[#4016A0] px-8 py-3 text-base font-medium text-white shadow hover:bg-[#4016A0]/90 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* About section */}
      <section className="bg-white py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-[#191919] mb-12">
            What we&apos;re about
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg p-6 text-center" style={{ background: "#FFEDE4" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#4016A0" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                <rect width="11.67" height="11.67" x="5" y="5" rx="1.67"/>
                <rect width="11.67" height="11.67" x="23.33" y="5" rx="1.67"/>
                <rect width="11.67" height="11.67" x="23.33" y="23.33" rx="1.67"/>
                <rect width="11.67" height="11.67" x="5" y="23.33" rx="1.67"/>
              </svg>
              <h3 className="mt-4 text-lg font-semibold text-[#191919]">
                Curated Collections
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                We source across electronics, clothing, sports, and home,
                selecting for quality and lasting value over trend-chasing.
              </p>
            </div>
            <div className="rounded-lg p-6 text-center" style={{ background: "#FFEDE4" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4016A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              <h3 className="mt-4 text-lg font-semibold text-[#191919]">
                Top-Rated Picks
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Every product here has proven itself through real customer use.
                High ratings mean something.
              </p>
            </div>
            <div className="rounded-lg p-6 text-center" style={{ background: "#FFEDE4" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4016A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
                <path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>
              </svg>
              <h3 className="mt-4 text-lg font-semibold text-[#191919]">
                Fresh Arrivals
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                New products appear regularly, so your feed stays stocked with
                genuinely useful discoveries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const font = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://proponitisfitness.com"),
  title: "Best Gym in Coimbatore — Proponitis Fitness, RS Puram",
  description:
    "Proponitis Fitness — Best personal training gym in Coimbatore, RS Puram. Weight loss, strength, sports training. Call +91 9952431546",
  keywords: [
    "best gym in coimbatore",
    "best fitness centre in coimbatore",
    "personal trainer coimbatore",
    "gym in rs puram coimbatore",
    "weight loss gym coimbatore",
    "sports specific training coimbatore",
    "women gym coimbatore morning",
    "proponitis fitness",
  ],
  openGraph: {
    title: "Best Gym in Coimbatore — Proponitis Fitness",
    description:
      "Best personal training gym in Coimbatore, RS Puram. Weight loss, strength & sports training by Mr. Selva Kumar — 14 years, M.P.Ed, 500+ clients.",
    url: "https://proponitisfitness.com",
    siteName: "Proponitis Fitness",
    images: [
      {
        url: "/assets/header.png",
        width: 800,
        height: 600,
        alt: "Best Fitness Centre in Coimbatore — Proponitis Fitness RS Puram",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Gym in Coimbatore — Proponitis Fitness",
    description:
      "Best personal training gym in Coimbatore, RS Puram. Weight loss, strength & sports training.",
    images: ["/assets/header.png"],
  },
  alternates: {
    canonical: "https://proponitisfitness.com",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: "Proponitis Fitness",
  description:
    "Best gym and personal training centre in Coimbatore, RS Puram. Expert coaching by Mr. Selva Kumar (M.P.Ed, 14 years, 500+ clients). Weight loss, sports training, functional fitness & stretching.",
  image: "https://proponitisfitness.com/assets/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Perumal Complex, 74, Ramachandra Rd, R.S. Puram",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    postalCode: "641002",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "11.0018",
    longitude: "76.9629",
  },
  hasMap: "https://maps.google.com/?q=Proponitis+Fitness+RS+Puram+Coimbatore",
  url: "https://proponitisfitness.com",
  telephone: "+919952431546",
  email: "support@proponitisfitness.com",
  priceRange: "$$",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI",
  openingHours: ["Mo-Sa 05:30-13:30", "Mo-Sa 16:00-22:00"],
  founder: {
    "@type": "Person",
    name: "Selva Kumar",
    jobTitle: "Certified Personal Trainer & Founder",
    description: "M.P.Ed from Pondicherry University, 14 years experience, 500+ clients trained",
  },
  sameAs: [
    "https://www.facebook.com/Tamilfitnesscoachselva/",
    "https://www.instagram.com/proponitisfitnessstudio/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const gadsId = process.env.NEXT_PUBLIC_GADS_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external CDNs for faster first paint */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://maxcdn.bootstrapcdn.com" />

        {/* Critical CSS — icons needed for initial render */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <link
          href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />

        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={`${font.className}`}>
        {children}

        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}

        {gadsId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gadsId}`}
              strategy="afterInteractive"
            />
            <Script id="gads-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gadsId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}

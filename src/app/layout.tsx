import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Proponitis Fitness | Best Gym in RS Puram, Coimbatore",
  description: "Join Proponitis Fitness in RS Puram, Coimbatore. Expert trainers, weight loss coaching, and strength conditioning to help you shape your destiny.",
  keywords: ["gym", "fitness", "coimbatore", "rs puram", "weight loss", "proponitis", "personal training"],
  openGraph: {
    title: "Proponitis Fitness - Shape Yourself",
    description: "Premium fitness studio in Coimbatore. Join us today!",
    url: "https://proponitisfitness.com",
    siteName: "Proponitis Fitness",
    images: [
      {
        url: "/assets/header.png",
        width: 800,
        height: 600,
        alt: "Proponitis Fitness Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proponitis Fitness",
    description: "Shape your destiny with expert fitness coaching in Coimbatore.",
    images: ["/assets/header.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
        />
        <link
          href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GymOrFitnessCenter",
              name: "Proponitis Fitness",
              image: "https://proponitisfitness.com/assets/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Perumal complex, 74, Ramachandra Rd, R.S. Puram",
                addressLocality: "Coimbatore",
                postalCode: "641002",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "11.0018",
                longitude: "76.9629",
              },
              url: "https://proponitisfitness.com",
              telephone: "+919952431546",
              priceRange: "$$",
              openingHours: "Mo-Su 05:00-22:00",
              sameAs: [
                "https://www.facebook.com/Tamilfitnesscoachselva/",
                "https://www.instagram.com/proponitisfitnessstudio/"
              ]
            }),
          }}
        />
      </head>
      <body className={`${font.className}`}>
        {children}
      </body>
    </html>
  );
}

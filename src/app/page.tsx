import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Trainer from "@/components/Trainer";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  "name": "Proponitis Fitness",
  "address": "Perumal Complex, 74 Ramachandra Rd, RS Puram, Coimbatore 641002",
  "telephone": "+919952431546",
  "openingHours": ["Mo-Sa 05:30-13:30", "Mo-Sa 16:00-22:00"],
  "priceRange": "₹₹",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "4"
  }
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Trainer />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}

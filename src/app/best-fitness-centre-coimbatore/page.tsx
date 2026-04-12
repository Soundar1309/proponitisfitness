import type { Metadata } from "next";
import SEOPageLayout from "@/components/SEOPageLayout";
import FitnessCentreContent from "./Content";

export const metadata: Metadata = {
  title: "Best Fitness Centre in Coimbatore — All Programmes | Proponitis Fitness",
  description:
    "Proponitis Fitness is the best fitness centre in Coimbatore. Weight loss training, sports specific training, personal training & full body stretching. Enquire on WhatsApp — no pricing on site.",
  keywords: [
    "best fitness centre in coimbatore",
    "weight loss gym coimbatore",
    "sports specific training coimbatore",
    "fitness centre coimbatore",
    "weight loss training coimbatore",
    "proponitis fitness programmes",
  ],
  openGraph: {
    title: "Best Fitness Centre in Coimbatore — Proponitis Fitness",
    description:
      "Best fitness centre in Coimbatore. Weight loss, sports training, personal training & stretching programmes. Certified trainer — 14 years exp.",
    url: "https://proponitisfitness.com/best-fitness-centre-coimbatore",
  },
  alternates: {
    canonical: "https://proponitisfitness.com/best-fitness-centre-coimbatore",
  },
};

export default function BestFitnessCentreCoimbatore() {
  return (
    <SEOPageLayout
      h1="Best Fitness Centre in Coimbatore — Proponitis Fitness"
      subtitle="All Programmes at One Centre"
      intro="Proponitis Fitness is the best fitness centre in Coimbatore offering a full range of training programmes under one roof. Whether your goal is weight loss, sports performance, personal coaching, or improving flexibility, every programme is designed and supervised by Mr. Selva Kumar — a certified fitness professional with 14 years of experience and a Master's in Physical Education. This best fitness centre in Coimbatore serves beginners, athletes, working professionals, and women equally."
      heroImage="/assets/seo-fitness.png"
      heroImageAlt="Functional training and fitness centre interior in RS Puram Coimbatore"
      whatsappMessage="Hi, I'd like to enquire about the fitness programmes at Proponitis Fitness, Coimbatore (best fitness centre)."
      ctaLabel="Enquire About Our Programmes — WhatsApp Us"
      testimonials={[
        {
          name: "Venkata Nathan",
          text: "I am a banking professional — due to continuous sitting I had gained weight to 105 kg. After joining the gym, within 20 days my body became fully flexible. My heartfelt thanks to Trainer Mr. Selva. I had a great experience.",
        },
        {
          name: "Vijayakumar Chandrasekaran",
          text: "Selvakumar sir is very professional. At the same time, he takes personal care. I have been training in his fitness centre for nearly a month and my experience is very good. I would certainly recommend him for all fitness aspirants.",
        },
      ]}
      relatedLinks={[
        { label: "Best Gym in Coimbatore", href: "/best-gym-coimbatore" },
        { label: "Personal Trainer in Coimbatore", href: "/personal-trainer-coimbatore" },
      ]}
    >
      <FitnessCentreContent />
    </SEOPageLayout>
  );
}

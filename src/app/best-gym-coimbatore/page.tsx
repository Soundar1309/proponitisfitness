import type { Metadata } from "next";
import SEOPageLayout from "@/components/SEOPageLayout";
import { motion } from "framer-motion";
import BestGymContent from "./Content";

export const metadata: Metadata = {
  title: "Best Gym in Coimbatore — Proponitis Fitness RS Puram",
  description:
    "Looking for the best gym in Coimbatore? Proponitis Fitness in RS Puram offers personal attention, certified coaching by Mr. Selva Kumar (M.P.Ed), flexible timings & special women's batch. Enquire now.",
  keywords: [
    "best gym in coimbatore",
    "gym in rs puram coimbatore",
    "women gym coimbatore morning",
    "fitness gym coimbatore",
    "proponitis fitness coimbatore",
  ],
  openGraph: {
    title: "Best Gym in Coimbatore — Proponitis Fitness RS Puram",
    description:
      "Best gym in Coimbatore with personal training, special women's morning batch, and flexible timings. RS Puram, Coimbatore.",
    url: "https://proponitisfitness.com/best-gym-coimbatore",
  },
  alternates: {
    canonical: "https://proponitisfitness.com/best-gym-coimbatore",
  },
};

export default function BestGymCoimbatore() {
  return (
    <SEOPageLayout
      h1="Best Gym in Coimbatore for Personal Training"
      subtitle="Proponitis Fitness — RS Puram"
      intro="Proponitis Fitness is the best gym in Coimbatore for anyone serious about getting fit, losing weight, or building strength. Located in RS Puram, Coimbatore, we offer personal attention, a clean environment, and a certified trainer with 14 years of experience. Whether you are a beginner or an experienced gym-goer, the best gym in Coimbatore is right here — designed around your goals."
      heroImage="/assets/seo-gym.png"
      heroImageAlt="Modern gym interior with professional equipment in RS Puram Coimbatore"
      whatsappMessage="Hi, I'd like to know more about membership at Proponitis Fitness — the best gym in Coimbatore, RS Puram."
      ctaLabel="WhatsApp Us to Know Membership Details"
      testimonials={[
        {
          name: "Vijayakumar Chandrasekaran",
          text: "The trainer Selvakumar sir is very professional. At the same time, he takes personal care. I have been training in his fitness centre for nearly a month and my experience is very good. I would certainly recommend him for all fitness aspirants.",
        },
        {
          name: "Venkata Nathan",
          text: "I am a banking professional — due to continuous sitting I had gained weight to 105 kg. After joining the gym, within 20 days my body became fully flexible. Mr. Selva is a very good trainer.",
        },
      ]}
      relatedLinks={[
        { label: "Personal Trainer in Coimbatore", href: "/personal-trainer-coimbatore" },
        { label: "Best Fitness Centre in Coimbatore", href: "/best-fitness-centre-coimbatore" },
      ]}
    >
      <BestGymContent />
    </SEOPageLayout>
  );
}

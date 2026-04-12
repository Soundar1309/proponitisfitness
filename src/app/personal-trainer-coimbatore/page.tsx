import type { Metadata } from "next";
import SEOPageLayout from "@/components/SEOPageLayout";
import PersonalTrainerContent from "./Content";

export const metadata: Metadata = {
  title: "Personal Trainer Gym in Coimbatore — Selva Kumar | Proponitis Fitness",
  description:
    "Find the best personal trainer in Coimbatore at Proponitis Fitness. Mr. Selva Kumar — M.P.Ed (Pondicherry University), 14 years experience, 500+ clients. Weight loss, sports training & corrective exercise. Book via WhatsApp.",
  keywords: [
    "personal trainer coimbatore",
    "personal trainer gym coimbatore",
    "best personal trainer coimbatore",
    "weight loss personal trainer coimbatore",
    "sports training coimbatore",
    "proponitis fitness personal training",
  ],
  openGraph: {
    title: "Personal Trainer Gym in Coimbatore — Proponitis Fitness",
    description:
      "Best personal trainer in Coimbatore. Mr. Selva Kumar — M.P.Ed, 14 years exp, 500+ clients. Weight loss, sports & corrective training.",
    url: "https://proponitisfitness.com/personal-trainer-coimbatore",
  },
  alternates: {
    canonical: "https://proponitisfitness.com/personal-trainer-coimbatore",
  },
};

export default function PersonalTrainerCoimbatore() {
  return (
    <SEOPageLayout
      h1="Best Personal Trainer in Coimbatore — Proponitis Fitness"
      subtitle="1-on-1 Coaching by Mr. Selva Kumar"
      intro="Proponitis Fitness offers the best personal trainer in Coimbatore with truly individualised coaching. Unlike crowded gyms where you train alone, every session here is guided by a certified professional who builds a programme specifically around your body, goals, and schedule. If you are looking for a personal trainer gym in Coimbatore that delivers real results, this is it."
      heroImage="/assets/seo-trainer.png"
      heroImageAlt="Professional personal trainer coaching a client at Proponitis Fitness Coimbatore"
      whatsappMessage="Hi, I'd like to know more about personal training at Proponitis Fitness, Coimbatore."
      ctaLabel="Talk to Our Personal Trainer — WhatsApp Now"
      testimonials={[
        {
          name: "Zahida Fathima",
          text: "I joined due to hand pain, and with regular exercises and continuous support, the pain has completely resolved within three months. The facility is clean and well-maintained, and the trainer is professional and always ready to address any queries.",
        },
        {
          name: "siva",
          text: "Genuinely a great gym experience with great trainers and a well equipped gym. The trainers are really friendly and have great knowledge on the subject of fitness and give really good advice to improve more.",
        },
      ]}
      relatedLinks={[
        { label: "Best Gym in Coimbatore", href: "/best-gym-coimbatore" },
        { label: "Best Fitness Centre in Coimbatore", href: "/best-fitness-centre-coimbatore" },
      ]}
    >
      <PersonalTrainerContent />
    </SEOPageLayout>
  );
}

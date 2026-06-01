import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fitness Blog — Proponitis Fitness, RS Puram, Coimbatore",
  description:
    "Read the latest fitness tips, health advice, expert training guides, and client success stories from Proponitis Fitness in RS Puram, Coimbatore.",
  keywords: [
    "fitness blog coimbatore",
    "gym blog coimbatore",
    "personal training tips",
    "weight loss advice coimbatore",
    "proponitis fitness blog",
  ],
  openGraph: {
    title: "Fitness Blog — Proponitis Fitness, RS Puram, Coimbatore",
    description:
      "Read the latest fitness tips, health advice, expert training guides, and client success stories from Proponitis Fitness.",
    url: "https://proponitisfitness.com/blog",
  },
  alternates: {
    canonical: "https://proponitisfitness.com/blog",
  },
};

export default function BlogLandingPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh" }}>
        {/* Blog Hero Banner */}
        <section className="blog-post__header">
          <div className="blog-post__header-container">
            <span className="blog-post__category">Latest Updates</span>
            <h1 className="blog-post__title" style={{ marginBottom: "1rem" }}>
              Our Fitness Blog
            </h1>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
              Expert insights, client success stories, and practical advice to help you transform your health, strength, and confidence.
            </p>
          </div>
        </section>

        {/* Blog Post Grid */}
        <section className="section__container" style={{ paddingTop: "3rem" }}>
          <div className="blog__grid">
            {/* Blog Card 1 */}
            <article className="blog__card">
              <div className="blog__card-image">
                <Image
                  src="/assets/seo-fitness.png"
                  alt="Transform Your Fitness Journey with Proponitis Fitness"
                  fill
                  className="blog__card-img"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
              <div className="blog__card-content">
                <div className="blog__card-meta">
                  <span>
                    <i className="ri-calendar-line"></i> 6 May 2026
                  </span>
                  <span>
                    <i className="ri-user-line"></i> By Selva
                  </span>
                </div>
                <h2 className="blog__card-title">
                  <Link href="/blog/transform-your-fitness-journey-with-proponitis-fitness">
                    Transform Your Fitness Journey with Proponitis Fitness
                  </Link>
                </h2>
                <p className="blog__card-description">
                  In today’s fast-moving world, taking care of your health is no longer an option—but it’s a necessity for your life to stay healthy. Discover how personalized coaching, custom diet plans, and sustainable training builds a stronger tomorrow.
                </p>
                <Link
                  href="/blog/transform-your-fitness-journey-with-proponitis-fitness"
                  className="blog__card-link"
                >
                  Read Full Article <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

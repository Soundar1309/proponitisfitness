import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Transform Your Fitness Journey with Proponitis Fitness — RS Puram, Coimbatore",
  description:
    "In today’s fast-moving world, taking care of your health is no longer an option—but it’s a necessity for your life to stay healthy. Read the guide from Proponitis Fitness.",
  keywords: [
    "transform fitness journey",
    "proponitis fitness",
    "gym in rs puram coimbatore",
    "personal fitness training coimbatore",
    "weight loss coimbatore",
  ],
  openGraph: {
    title: "Transform Your Fitness Journey with Proponitis Fitness",
    description:
      "In today’s fast-moving world, taking care of your health is no longer an option—but it’s a necessity for your life to stay healthy. Read the full post here.",
    url: "https://proponitisfitness.com/blog/transform-your-fitness-journey-with-proponitis-fitness",
    type: "article",
    publishedTime: "2026-05-06T00:00:00.000Z",
    authors: ["Selva Kumar"],
  },
  alternates: {
    canonical: "https://proponitisfitness.com/blog/transform-your-fitness-journey-with-proponitis-fitness",
  },
};

export default function BlogPostPage() {
  const whatsappUrl =
    "https://api.whatsapp.com/send?phone=919952431546&text=" +
    encodeURIComponent(
      "Hi, I read your blog post 'Transform Your Fitness Journey' and would like to know more about personal training at Proponitis Fitness."
    );

  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh" }}>
        {/* Article Header */}
        <section className="blog-post__header">
          <div className="blog-post__header-container">
            <span className="blog-post__category">Fitness & Transformation</span>
            <h1 className="blog-post__title">
              Transform Your Fitness Journey with Proponitis Fitness
            </h1>
            <div className="blog-post__meta">
              <span>
                <i className="ri-calendar-line"></i> 6 May 2026
              </span>
              <span>
                <i className="ri-user-line"></i> By Selva (Certified Personal Trainer)
              </span>
              <span>
                <i className="ri-map-pin-line"></i> RS Puram, Coimbatore
              </span>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <div className="blog-post__featured-wrapper">
          <div className="blog-post__featured-img-container">
            <Image
              src="/assets/seo-fitness.png"
              alt="Transform Your Fitness Journey with Proponitis Fitness Coimbatore"
              fill
              className="blog__card-img"
              sizes="(max-width: 1200px) 100vw, 900px"
              priority
            />
          </div>
        </div>

        {/* Layout container */}
        <section className="blog-post__layout">
          {/* Main content column */}
          <article className="blog-post__content">
            <p>
              In today’s fast-moving world, taking care of your health is no longer an option—but it’s a necessity for your life to stay healthy. At Proponitis Fitness Personalised Training Studio, we believe that fitness is not just about looking good, but to feel strong, confident, and capable of your day-to-day activity effectively. So, living healthy is mandatory for you to stay strong in your Life to reach your personal and professional goals. We provide training to make you strong physically and mentally.
            </p>

            <h2>Who we are?</h2>
            <p>
              Proponitis Fitness is a premium personal training fitness studio located in RS Puram, Coimbatore founded in March 2019. Founded by Selva, a certified personal fitness coach with over 14 years of experience in providing Fitness Training, Our mission is simple: To help you become the strongest version of yourself—physically and mentally.
            </p>

            <h2>Why Choose Proponitis Fitness?</h2>
            <ul className="blog-post__checkmark-list">
              <li>
                <h4>Personalized Training</h4>
                <p>
                  Personalised Training tailors fitness to each individual based on their goals, skills rather than using a one size fit. We designed customized workout plans for each individual based on their physic, goals, lifestyle, and fitness level—whether it’s weight loss, muscle gain, or overall fitness in achieving the fitness. These personal training programs often yielding 30-40% better results than generic programs. We consider your available time, available equipment’s and goals.
                </p>
              </li>
              <li>
                <h4>Expert Coaching</h4>
                <p>
                  Our top-rated trainers of gym in personal training, functional fitness, and corrective exercise, weight loss, strength training, proper nutrition, cardio vascular, sustainable life style changes for we ensure safe and effective training methods for beginners and fitness enthusiasts. We known for our intensive and effective which gives significant transformations in body.
                </p>
              </li>
              <li>
                <h4>Sports-Specific Training</h4>
                <p>
                  We specialize in improving athletic performance. Our clients, including national-level athletes, have achieved national level medals and improved performance, through our structured training programs. We give training based on the specific sport by training the necessary skills. The benefit of this training is to helps to develop the necessary skills that allows to perform better than before with much confidence.
                </p>
              </li>
              <li>
                <h4>Weight Loss & Transformation</h4>
                <p>
                  Our proven fat-loss programs help you to lose weight sustainably while maintaining muscle and energy levels. Our weight loss programs prioritize sustainable, science-backed methods combining nutritional changes with regular physical activity. Our plans focus on calorie reduction, food intake, regular strength training. Core Strategies for Success for weight loss programs includes Diet updates, exercise optimization, behavioural habits.
                </p>
              </li>
              <li>
                <h4>Injury Prevention & Rehabilitation</h4>
                <p>
                  We focus on posture correction, mobility, and strengthening weak areas to reduce pain—especially back pain and joint issues. Our effective injury prevention and rehabilitation programs involves a combination of structured exercise, proper technique, and adequate recovery to maintain functional movement that prevent re-injury.
                </p>
              </li>
            </ul>

            <h2>Our Approach to Fitness</h2>
            <p>
              At Proponitis Fitness, we don’t believe in shortcuts.
            </p>
            <p>
              Our approach is to built on:
            </p>
            <ul>
              <li>Consistency over intensity</li>
              <li>Proper technique over heavy lifting</li>
              <li>Long-term health over quick results</li>
            </ul>
            <p>
              We guide you step-by-step, making fitness a sustainable part of your lifestyle.
            </p>

            <h2>Who Can Join?</h2>
            <ul>
              <li>Beginners started their fitness journey</li>
              <li>Busy professionals with limited time</li>
              <li>Women looking to build strength and confidence</li>
              <li>Athletes aiming for peak performance</li>
              <li>Anyone struggling with weight loss or body pain</li>
              <li>Anyone who wants to balance the weight and gain fitness</li>
            </ul>

            <h2>Client Success Stories</h2>
            <p>
              Our clients have achieved incredible transformations—in loose weight, improvement in physical and mental strength, feeling confident in the daily life ability, and they became the winner of national-level medals in the sports by our specific sports training programme. Our participants have improved their physical health and enhanced their mobility and stamina. Our mental well-being programmes provided the enhanced emotional and mental well-being, improved self-image and reduced their mental fatigue of worrying about weight. They achieve the long-term weight loss for years and got the permanent life style changes. Our personalized training sessions helped more clients to stay unwavering and focused.
            </p>

            <h2>Start Your Journey Today</h2>
            <p>
              Are your fitness journey doesn’t have to be confusing or overwhelming. With the right guidance, you can achieve more than you think about your physical and mental health.
            </p>

            <h2>Conclusion:-</h2>
            <p>
              Your health is an investment it’s not an extra expense to you. The time, care, money you invest for yourself today builds a stronger tomorrow. Living a happier, more satisfied life is within reach. Your health is your greatest investment, and every small step you take today builds a stronger tomorrow. Consistency, discipline, and self-care are the keys to living a healthier and happier life. No one else can take this journey for you — it begins with your decision to start and your commitment to keep going.
            </p>
            <p>
              Start today. Stay focused. Transform your life with confidence.
            </p>
            <p>
              Proponitis Fitness — Happy to support your fitness journey.
            </p>
          </article>

          {/* Sidebar column */}
          <aside className="blog-post__sidebar">
            {/* CTA Box */}
            <div className="blog-post__sidebar-widget">
              <h3>Start Training Today</h3>
              <p>
                Get personal attention, customized diet plans, and expert fitness guidance by Coach Selva at Coimbatore's premier fitness studio.
              </p>
              <div className="blog-post__contact-info">
                <div className="blog-post__contact-item">
                  <i className="ri-map-pin-line"></i>
                  <div>
                    <h5>Address</h5>
                    <p>No.74, Ramachandra Road, RS Puram, Coimbatore</p>
                  </div>
                </div>
                <div className="blog-post__contact-item">
                  <i className="ri-phone-line"></i>
                  <div>
                    <h5>Phone</h5>
                    <p>
                      <a href="tel:+919952431546" style={{ color: "inherit" }}>
                        9952431546
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn blog-post__cta-btn"
              >
                <i className="ri-whatsapp-line"></i> WhatsApp Coach Selva
              </a>
            </div>

            {/* Coach Bio widget */}
            <div className="blog-post__sidebar-widget">
              <h3>Our Head Coach</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <p style={{ margin: 0 }}>
                  <strong>Coach Selva</strong> has over 14 years of experience and has successfully coached over 500+ clients to reach their fitness and health goals.
                </p>
                <Link
                  href="/#trainer"
                  style={{ color: "var(--primary-color)", fontWeight: "600", fontSize: "0.95rem" }}
                >
                  Meet Coach Selva <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}

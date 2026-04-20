"use client";

import React from "react";
import { motion } from "framer-motion";

const fallbackReviews = [
    {
        name: "Zahida Fathima",
        text: "I joined due to hand pain, and with regular exercises and continuous support, the pain has completely resolved within three months. The facility is clean and well-maintained, and the trainer is professional, approachable, and always ready to address any queries.",
        rating: 5,
    },
    {
        name: "Siva",
        text: "Genuinely a great gym experience with great trainers and a well equipped gym. The trainers are really friendly and have great knowledge on the subject of fitness and give really good advice to improve more.",
        rating: 5,
    },
    {
        name: "Vijayakumar Chandrasekaran",
        text: "Selvakumar sir is very professional. At the same time, he takes personal care. I have been training in his fitness centre for nearly a month and my experience is very good. I would certainly recommend him for all fitness aspirants.",
        rating: 5,
    },
    {
        name: "Venkata Nathan",
        text: "I was a banking professional who gained weight to 105 kg. After joining the gym, within 20 days my body became fully flexible. My heartfelt thanks to Trainer Mr. Selva — I had a great experience.",
        rating: 5,
    },
];

const StarRating = ({ count }: { count: number }) => (
    <div className="client__ratings" aria-label={`${count} out of 5 stars`}>
        {Array.from({ length: count }).map((_, i) => (
            <span key={i}>
                <i className="ri-star-fill"></i>
            </span>
        ))}
    </div>
);

const Reviews = () => {
    return (
        <section className="section__container client__container" id="client">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="section__header">What Our Members Say</h2>
                <p className="section__description">
                    Real results from real clients at Proponitis Fitness — the best gym
                    in Coimbatore. Personalised coaching that delivers sustainable
                    transformation.
                </p>
            </motion.div>

            {/* ── Manual Reviews Grid ── */}
            <div className="reviews__fallback-grid">
                {fallbackReviews.map((review, index) => (
                    <motion.div
                        className="client__card reviews__card"
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="reviews__avatar">
                            <i className="ri-user-3-line"></i>
                        </div>
                        <StarRating count={review.rating} />
                        <p>&ldquo;{review.text}&rdquo;</p>
                        <h4>{review.name}</h4>
                        <span className="reviews__google-badge">
                            <i className="ri-google-fill"></i> Google Review
                        </span>
                    </motion.div>
                ))}
            </div>

            {/* ── Get More Reviews CTA ── */}
            <motion.div
                className="reviews__cta"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <p>Happy with your training? Share your experience on Google.</p>
                <a
                    href="https://g.page/r/CSzdZCkZpkvkEBM/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reviews__google-cta"
                    id="leave-google-review-btn"
                >
                    <i className="ri-google-fill"></i> Leave a Google Review
                </a>
            </motion.div>
        </section>
    );
};

export default Reviews;

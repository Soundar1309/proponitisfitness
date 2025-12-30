"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";

const reviews = [
    {
        name: "Zahida Fathima",
        text: "I joined due to hand pain, and with regular exercises and continuous support, the pain has completely resolved within three months. The facility is clean and well-maintained, and the trainers are professional, approachable, and always ready to address any queries.",
        rating: 5,
        image: "/assets/client-1.jpg",
    },
    {
        name: "siva",
        text: "Genuinely a great gym experience with great trainers and a well equipped gym, the trainers are really friendly and have great knowledge on the subject of fitness and give really good advice to improve more.",
        rating: 5,
        image: "/assets/client-1.jpg",
    },
    {
        name: "Vijayakumar Chandrasekaran",
        text: "The trainer Selvakumar sir is very professional. At the same time, he takes personal care. I am very happy with his teaching methods. I have been training in his fitness centre for nearly a month and my experience is very good. I would certainly recommend him for all fitness aspirants.",
        rating: 5,
        image: "/assets/client-1.jpg",
    },
    {
        name: "Venkata Nathan",
        text: "I am a banking professional due to continuous sitting job I have gained my weight to 105 kg. After joining the gym of 20 days my body get fully flexible. My heart felt thanks to Trainer Mr selva. I had a great experience with the gym. Mr selva is very good trainer .",
        rating: 5,
        image: "/assets/client-1.jpg",
    },
];

const Reviews = () => {
    return (
        <section className="section__container client__container" id="client">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="section__header">What People Say About Us?</h2>
                <p className="section__description">
                    These testimonials serve as a testament to our commitment to helping
                    individuals achieve their fitness goals, and fostering a supportive
                    environment for everyone who walks through our doors.
                </p>
            </motion.div>
            <div className="swiper">
                <Swiper
                    loop={true}
                    spaceBetween={20}
                    className="swiper-wrapper"
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index} className="swiper-slide">
                            <motion.div
                                className="client__card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <Image
                                    src={review.image}
                                    alt="client"
                                    width={80}
                                    height={80}
                                    style={{ objectFit: "cover" }}
                                />
                                <div className="client__ratings">
                                    {Array.from({ length: review.rating }).map((_, i) => (
                                        <span key={i}>
                                            <i className="ri-star-fill"></i>
                                        </span>
                                    ))}
                                </div>
                                <p>{review.text}</p>
                                <h4>{review.name}</h4>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Reviews;

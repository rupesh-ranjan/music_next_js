"use client";

import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

function MusicSchoolAboutUs() {
  return (
    <div className="max-w-4xl mx-auto p-6 pt-24 relative z-10">
      <h1 className="text-2xl md:text-7xl text-center font-sans font-bold mb-10 text-white">
        About Us
      </h1>

      <div className="text-neutral-300 text-lg md:text-xl max-w-3xl mx-auto space-y-8">
        <section className="text-center">
          <p>
            At <span className="text-teal-500 font-semibold">Music School</span>
            , we believe that music is more than just notes—it's a journey of
            self-expression and discovery. Our mission is to guide you every
            step of the way, whether you're strumming your first chord or
            mastering complex compositions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 text-center">
            Our Story
          </h2>
          <p>
            Founded in 2023 by Rupesh Ranjan and his team, a renowned pianist
            with 20 years of teaching experience, we set out to create a
            platform that breaks down barriers to music education. Tired of
            seeing expensive lessons and rigid schedules hold students back, we
            built a space where learning is flexible, engaging, and tailored to
            your pace.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 text-center">
            What We Offer
          </h2>
          <p>
            From beginner tutorials to advanced techniques, our library of
            lessons covers guitar, piano, music theory, and songwriting and many
            more. With interactive videos, real-time feedback, and a supportive
            community, we're here to help you find your sound and share it with
            the world.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 text-center">
            Our Promise
          </h2>
          <p>
            We're more than just a tutorial site—we're your musical family.
            Every lesson is crafted with care by expert instructors who've
            played on stages and taught in classrooms worldwide. Join us, and
            let's make music that matters, together.
          </p>
        </section>
      </div>

      <div className="text-center mt-12">
        <a
          href="/courses" // Replace with your actual signup/learn more page
          className="inline-block px-8 py-3 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors duration-200"
        >
          Start Your Musical Journey
        </a>
      </div>
    </div>
  );
}

export default MusicSchoolAboutUs;

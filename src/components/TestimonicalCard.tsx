"use client";

import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import testimonialData from "@/data/music_testimonials.json";
const musicSchoolTestimonials = testimonialData.testimonials;
function MusicSchollTestimonialCards() {
  return (
    <div className="h-full w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <AnimatedTestimonials testimonials={musicSchoolTestimonials} />
        </div>
      </div>
    </div>
  );
}

export default MusicSchollTestimonialCards;

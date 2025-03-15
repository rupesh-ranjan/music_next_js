"use client";
import React from "react";
import musicData from "@/data/music_content.json";
const musicSchoolContent = musicData.musicSchoolContent;
console.log(musicSchoolContent);

import { StickyScroll } from "./ui/sticky-scroll-reveal";
function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}

export default WhyChooseUs;

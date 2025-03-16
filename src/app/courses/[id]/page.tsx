"use client";

import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";
import courseData from "@/data/music_courses.json";

interface Params {
  id: string;
}
interface CoursePageProps {
  params: Promise<Params>;
}

export default function CoursePage({ params: paramsPromise }: CoursePageProps) {
  const params: Params = React.use(paramsPromise);
  const courseId = Number(params.id);
  const course = courseData.courses.find((c) => c.id === courseId);
  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black py-12 pt-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-sans font-bold text-white mb-6">
          {course.title}
        </h1>
        <div className="bg-gray-50 dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border">
          <Image
            src={course.image}
            height="1000"
            width="1000"
            className="h-80 w-full object-cover rounded-xl mb-6"
            alt={course.title}
          />
          <p className="text-neutral-500 dark:text-neutral-300 text-lg mb-4">
            {course.description}
          </p>
          {/* Add more course details here if available in your JSON */}
          <div className="text-white">
            <p className="text-sm">
              {/* Example: Add more fields like price, duration, etc. */}
              {/* e.g., <span>Price: ${course.price}</span> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

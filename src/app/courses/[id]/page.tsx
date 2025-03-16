"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import courseData from "@/data/music_courses.json";

interface Params {
  id: string;
}

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

interface CoursePageProps {
  params: Promise<Params>;
}

export default function CoursePage({ params: paramsPromise }: CoursePageProps) {
  const params: Params = React.use(paramsPromise);
  const courseId = Number(params.id);

  if (isNaN(courseId)) {
    notFound();
  }

  const course: Course | undefined = courseData.courses.find(
    (c: Course) => c.id === courseId
  );

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
          <div className="relative mb-6">
            <Image
              src={course.image}
              height={1000}
              width={1000}
              className="h-80 w-full object-cover rounded-xl"
              alt={course.title}
            />
            {course.isFeatured && (
              <span className="absolute top-0 left-0 bg-yellow-500 text-black text-sm font-semibold px-2 py-1 rounded">
                Featured
              </span>
            )}
          </div>
          <p className="text-neutral-500 dark:text-neutral-300 text-lg mb-4">
            {course.description}
          </p>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="text-white space-y-2">
              <p className="text-lg">
                <span className="font-semibold">Price:</span> ₹
                {course.price.toFixed(2)}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Instructor:</span>{" "}
                {course.instructor}
              </p>
            </div>
            <Link
              href="/courses"
              className="mt-6 inline-block bg-transparent text-white border border-white/80 px-4 py-2 rounded-lg hover:bg-gray-200 hover:text-black transition-colors"
            >
              ← Back to All Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

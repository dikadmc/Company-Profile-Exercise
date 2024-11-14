"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [testimonials] = useState([
    {
      body: "TechInnovate Solutions transformed our business with their innovative software solutions. Highly recommended!",
      author: {
        name: "John Doe",
        handle: "CEO, Tech Corp",
        imageUrl: "/testimonial1.jpg",
      },
    },
    {
      body: "The cloud services provided by TechInnovate Solutions have greatly improved our scalability and efficiency.",
      author: {
        name: "Jane Smith",
        handle: "CTO, Data Insights",
        imageUrl: "/testimonial2.jpg",
      },
    },
    {
      body: "Their data analytics solutions have given us valuable insights that drive our business decisions.",
      author: {
        name: "Mike Johnson",
        handle: "Director of Analytics, InnovateCo",
        imageUrl: "/testimonial3.webp",
      },
    },
  ]);

  return (
    <div className="bg-white">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Innovative Solutions for Modern Businesses
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  TechInnovate Solutions stands at the cutting edge of
                  technology, specializing in software development, cloud
                  services, and innovative tech solutions that propel businesses
                  into the future. Our team of experts is dedicated to crafting
                  custom software solutions that are not only scalable but also
                  perfectly aligned with the unique goals and challenges of your
                  business. From developing bespoke applications to optimizing
                  your existing systems, we ensure that every piece of
                  technology we deliver serves to enhance your operational
                  efficiency and drive business growth.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/services"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                  >
                    Our Services
                  </Link>
                  <Link
                    href="/about"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="aspect-[1/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/hero-image.jpg"
            alt="TechInnovate Solutions"
            width={1920}
            height={1080}
            priority
          />
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-indigo-600">
              Testimonials
            </h2>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              What Our Clients Say
            </p>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.name}
                className="bg-gray-50 p-8 rounded-lg shadow-md"
              >
                <blockquote className="text-gray-900">
                  <p>{`"${testimonial.body}"`}</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4">
                  <Image
                    src={testimonial.author.imageUrl}
                    alt={testimonial.author.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.author.name}
                    </div>
                    <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                  </div>
                </figcaption>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

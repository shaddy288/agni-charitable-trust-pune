"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Play } from "lucide-react";
import type { CarouselApi } from "@/components/ui/carousel";

// 👇 Using your local UI library
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Images
import foodDrive1 from "@/assets/activities/latest1.png";
import foodDrive2 from "@/assets/activities/latest2.png";
import foodDrive3 from "@/assets/activities/latest3.png";
import communityOutreach from "@/assets/activities/latest4.png";
import healthcareInitiative from "@/assets/activities/latest6.png";

// Data
const activities = [
  {
    title: "Food Drive",
    description: "Distributing meals to underprivileged communities",
    image: foodDrive1,
    category: "Food Drive",
  },
  {
    title: "Community Support",
    description: "Supporting local families in need",
    image: foodDrive2,
    category: "Food Drive",
  },
  {
    title: "Nutrition Program",
    description: "Ensuring healthy meals for children",
    image: foodDrive3,
    category: "Food Drive",
  },
  {
    title: "Community Outreach",
    description: "Connecting with communities across Pune",
    image: communityOutreach,
    category: "Food Drive",
  },
  {
    title: "Healthcare Services",
    description: "Providing essential healthcare support",
    image: healthcareInitiative,
    category: "Food Drive",
  },
];

export function ActivitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Update current slide when carousel changes
  useEffect(() => {
    if (!api) return;

    const updateSlide = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", updateSlide);
    updateSlide(); // Set initial value

    return () => {
      api.off("select", updateSlide);
    };
  }, [api]);

  // Auto-slide functionality
  useEffect(() => {
    if (!api) return;

    const autoSlide = setInterval(() => {
      api.scrollNext();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(autoSlide);
  }, [api]);

  // Handle dot click
  const scrollToSlide = useCallback(
    (index: number) => {
      if (!api) return;
      api.scrollTo(index);
    },
    [api]
  );

  return (
    <section id="activities" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-3 mb-6">
            Latest Activities
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See the impact we're making in communities across Pune through our
            various programs and initiatives.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            className="w-full"
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {activities.map((activity, index) => (
                <CarouselItem
                  key={activity.title}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card-elevated overflow-hidden group cursor-pointer rounded-lg"
                  >
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ aspectRatio: "1.5/1.5" }}
                      />
                      {/* Hover Play Overlay */}
                      {/* <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
                          <Play className="w-8 h-8 text-primary-foreground fill-primary-foreground" />
                        </div>
                      </div> */}
                      {/* Category Tag */}
                      <span className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {activity.category}
                      </span>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {activities.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

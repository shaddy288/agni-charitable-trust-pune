"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";

// 👇 Using your local UI library
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Images
import womenEmpowerment from "@/assets/activities/women-empowerment.jpg";
import healthCamp from "@/assets/activities/health-camp.jpg";
import bloodDonation from "@/assets/activities/blood-donation.jpg";

// Data
const activities = [
  {
    title: "Women Empowerment",
    description: "Vocational training programs for self-reliance",
    image: womenEmpowerment,
    category: "Education",
  },
  {
    title: "Health Camp",
    description: "Free medical checkups in rural areas",
    image: healthCamp,
    category: "Healthcare",
  },
  {
    title: "Blood Donation Drive",
    description: "Community blood donation camps",
    image: bloodDonation,
    category: "Healthcare",
  },
  
];

export function ActivitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
        <Carousel className="w-full">
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
                      className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Hover Play Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
                        <Play className="w-8 h-8 text-primary-foreground fill-primary-foreground" />
                      </div>
                    </div>
                    {/* Category Tag */}
                    <span className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {activity.category}
                    </span>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

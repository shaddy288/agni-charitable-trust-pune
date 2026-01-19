import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shirt, Baby, Stethoscope, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Shirt,
    title: "Collecting Funds",
    description:
      "By collecting funds for an NGO, we give life to projects that bring hope, support, and change to those who need it most. Every contribution—big or small—helps the organization reach more people, create brighter futures, and inspire compassion within the community.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Baby,
    title: "Blood Camp",
    description:
      "A blood camp is a beautiful example of compassion in action. People come together to donate a small part of themselves that can make a life-changing difference for someone else. With the support of caring volunteers and medical professionals, the camp creates a positive, hopeful atmosphere where every contribution brings the gift of life to those in need.",
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    icon: Stethoscope,
    title: "Friendly Volunteers",
    description:
      "Friendly volunteers bring kindness, joy, and encouragement to everything they do. Their smiles lift spirits, their support builds confidence, and their presence makes every moment feel more meaningful for the people they serve.",
    color: "bg-emerald-500/10 text-emerald-600",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            How We Help
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-3 mb-6">
            Reasons for Helping
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We focus on three core areas that make the biggest impact in our
            communities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="card-elevated p-8 group hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6`}
              >
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-bold text-2xl mb-4 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

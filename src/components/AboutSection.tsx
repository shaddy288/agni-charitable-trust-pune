import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Heart, Users, Sparkles } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To uplift the underprivileged sections of society through sustainable development programs.",
  },
  {
    icon: Heart,
    title: "Widow Support",
    description:
      "Providing financial assistance, skill training, and emotional support to widows in need.",
  },
  {
    icon: Users,
    title: "Health Camps",
    description:
      "Organizing free health checkup camps in rural and urban slum areas across Pune.",
  },
  {
    icon: Sparkles,
    title: "Blood Donation",
    description:
      "Regular blood donation drives to ensure availability of blood for those in need.",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-3 mb-6">
            Agni Charitable Trust Pune is a non-profit organization
          </h2>
          <p className="text-muted-foreground text-lg max-w-6xl mx-auto leading-relaxed mb-2">
            Agni Charitable Trust, Pune, is a non-profit organization dedicated
            to creating a positive impact across various sections of society.
            Our mission is to bring change through compassion, awareness, and
            collective effort.
          </p>
          <p className="text-muted-foreground text-lg max-w-6xl mx-auto leading-relaxed mb-2">
            We work on a wide range of social causes including women’s safety,
            youth and men’s welfare, healthcare, and education. Our team
            actively addresses real-life problems faced by individuals and
            communities, ensuring that help reaches where it’s needed the most.
          </p>
          <p className="text-muted-foreground text-lg max-w-6xl mx-auto leading-relaxed mb-2">
            To promote good health, we regularly organize free medical check-up
            and blood donation camps, making healthcare accessible to everyone.
            In the field of education, we support awareness drives and programs
            that empower people with knowledge and skills.
          </p>
          <p className="text-muted-foreground text-lg max-w-6xl mx-auto leading-relaxed mb-2">
            We also focus on empowering widows by helping them gain financial
            independence, emotional strength, and social respect through various
            training and support initiatives.
          </p>
          <p className="text-muted-foreground text-lg max-w-6xl mx-auto leading-relaxed mb-2">
            Beyond these initiatives, we believe in preserving culture and
            spreading joy. Through cultural events and social activities, we aim
            to build unity, awareness, and a sense of belonging among people.
          </p>
          <p className="text-muted-foreground text-lg max-w-6xl mx-auto leading-relaxed mb-2">
            At Agni Charitable Trust, we believe that every small act of
            kindness can ignite change — and together, we can make a brighter,
            safer, and stronger society.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated p-6 text-center group hover:bg-primary hover:text-primary-foreground"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-serif font-bold text-xl mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

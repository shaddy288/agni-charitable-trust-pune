import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link, Mail } from "lucide-react";

import founderImg from "@/assets/team/founder.jpg";
import secretaryImg from "@/assets/team/secretary.png";
import treasurerImg from "@/assets/team/treasurer.png";
import secretary from "@/assets/team/secretaryNew.png";
import member1Img from "@/assets/team/member1Img.png";
import member2Img from "@/assets/team/member2Img.png";
import member3Img from "@/assets/team/member3Img.png";

const coreTeam = [
  {
    name: "Kavita Jawale",
    role: "President",
    image: founderImg,
  },
  {
    name: "Parmod Nemade",
    role: "Vice President",
    image: secretaryImg,
  },
  {
    name: "Rajat Jawale",
    role: "Treasurer",
    image: treasurerImg,
  },
  {
    name: "Ajinkya Sonawne",
    role: "Secretary",
    image: secretary,
  },
];

const registeredMembers = [
  { name: "Sudesh Gujar", role: "", image: member1Img },
  { name: "Ajinkya Salunkhe", role: "", image: member2Img },
];

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  index: number;
  isInView: boolean;
  isCore?: boolean;
}

function TeamMemberCard({
  name,
  role,
  image,
  index,
  isInView,
  isCore = false,
}: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group ${isCore ? "col-span-1" : ""}`}
    >
      <div className="card-elevated overflow-hidden">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-70 group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
              >
                <Link className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="p-5 text-center">
          <h3 className="font-serif font-bold text-lg text-foreground">
            {name}
          </h3>
          <p className="text-muted-foreground text-sm mt-1">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-3 mb-6">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our dedicated team of volunteers and professionals work tirelessly
            to make a difference in the lives of those we serve.
          </p>
        </motion.div>

        {/* Core Team */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-serif font-bold text-foreground text-center mb-8"
          >
            Former Member
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreTeam.map((member, index) => (
              <TeamMemberCard
                key={member.name}
                {...member}
                index={index}
                isInView={isInView}
                isCore
              />
            ))}
          </div>
        </div>

        {/* Registered Members */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl font-serif font-bold text-foreground text-center mb-8"
          >
            Registered Members
          </motion.h3>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {registeredMembers.map((member, index) => (
              <div
                key={member.name}
                className="w-full h-full flex justify-center items-stretch"
              >
                <TeamMemberCard
                  {...member}
                  index={index + 3}
                  isInView={isInView}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

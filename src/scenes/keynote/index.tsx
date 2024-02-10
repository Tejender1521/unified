
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/about.webp";


const benefits: Array<BenefitType> = [
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title:
      "Safety and Security Challenges in Cyber-Processing Systems - Dr. Faisal Khan",
    description:
      "The automated processing systems are equipped with shared control systems with two intelligent decision-makers: humans and automated machines. The contradictory observations, states, goals, and actions may result in a conflict between these two decision-makers. The definitions, cause(s), and path(s) of such a conflict from a process safety perspective have not been explored and assessed. This work introduces an evolutionary framework that shows how a conflict can led to an accident... ",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Keynote = () => {
  return (
    <section id="conferences" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>Keynotes</HText>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </motion.div>


      </motion.div>
    </section>
  );
};

export default Keynote;

import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, BenefitTypeWithLink, SelectedPage } from "@/shared/types";
import {
  UserIcon
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";



const benefits: Array<BenefitType> = [
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr. Gunjan Soni, Organizing Secratary",
    description:
      "Department of Mechanical Engineering, Malaviya National Institute of Technology Jaipur-302017",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr. Nikhil Sharma, Organizing Secratary",
    description:
      "Department of Mechanical Engineering, Malaviya National Institute of Technology Jaipur-302017",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr. Naresh Raghuvanshi, Joint Secratary",
    description:
      "Department of Mechanical Engineering, Malaviya National Institute of Technology Jaipur-302017",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr. Gulab Pamnani, Joint Secratary ",
    description:
      "Department of Mechanical Engineering, Malaviya National Institute of Technology Jaipur-302017",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};



const LocalCommitee = () => {
  return (
    <section id="LocalCommitee" className="mx-auto w-5/6 py-20">
      <motion.div
      // onViewportEnter={() => setSelectedPage(SelectedPage.Patron)}
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
          <HText>Local Organizing Committee</HText>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-6 text-sm md:flex"
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
              // link={benefit.link}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LocalCommitee;

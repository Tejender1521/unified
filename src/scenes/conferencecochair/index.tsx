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
    title: "Dr. Gunjan Soni",
    description: "Malaviya National Institute of Technology, Jaipur, India",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof. Jyoti Sinha",
    description: "University of Manchester, U.K.",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof. Andrew Ball",
    description: "University of Huddersfield, U.K.",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof. Huajiang Ouyang",
    description: "University of Liverpool, U.K.",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof. Anish Roy",
    description: "Loughborough University, U.K.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};



const Conferencecochair = () => {
  return (
    <section id="Conferencecochair" className="mx-auto w-5/6 py-20">
      <motion.div
      // onViewportEnter={() => setSelectedPage(SelectedPage.Conferencecochair)}
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
          <HText>Conference Co-Chairs</HText>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-6 md:flex text-sm"
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

export default Conferencecochair;

import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, BenefitTypeWithLink, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
  BanknotesIcon
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";



const benefits: Array<BenefitTypeWithLink> = [
  {
    icon: <HomeModernIcon className="h-8 w-8" />,
    title: "Patron",
    description: "Meet the Patron of the UNIfied 2024",
    link: "/comingsoon",
  },
  {
    icon: <UserGroupIcon className="h-8 w-8" />,
    title: "Conference Chair",
    description: "Meet the Conference Chair of the UNIfied 2024",
    link: "/comingsoon",
  },
  {
    icon: <UserGroupIcon className="h-8 w-8" />,
    title: "Conference Co-chairs",
    description: "Meet the Conference Co-chairs of the UNIfied 2024",
    link: "/comingsoon",
  },
  {
    icon: <AcademicCapIcon className="h-8 w-8" />,
    title: "Advisory Committee",
    description: "Meet the Advisory Committee of the UNIfied 2024",
    link: "/comingsoon",
  },
  {
    icon: <BanknotesIcon className="h-8 w-8" />,
    title: "International Sponsors",
    description: "Meet the International Sponsors of the UNIfied 2024",
    link: "/comingsoon",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};



const Commitees = () => {
  return (
    <section id="Commitees" className="mx-auto w-5/6 py-20">
      <motion.div
      // onViewportEnter={() => setSelectedPage(SelectedPage.Commitees)}
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
          <HText>Commitees</HText>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-2 md:flex text-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitTypeWithLink) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              link={benefit.link}
            />
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Commitees;

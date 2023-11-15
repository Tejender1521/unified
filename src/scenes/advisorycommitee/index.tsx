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
    title: "Prof. David He",
    description:
      "University of Illinois at Chicago, U.S.A.",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof. O.P. Yadav",
    description:
      "NCAT State University, U.S.A.",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof. Rakesh Mishra",
    description:
      "University of Huddersfield, U.K.",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof. Sachin Mangla",
    description:
      "Plymouth Business School, UK.",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof. Uday Kumar",
    description:
      "Luleå University of Technology, Sweden",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof. Vipul Jain",
    description:
      "Victoria Univ. of Wellington, New Zealand",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof. Yigit Kazankoglu",
    description:
      "Yasar University, Turkey",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr. Arvind Keprate",
    description:
      "Oslo Metropolitan University, Norway",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr. Chetan Kulkarni",
    description:
      "NASA Ames, U.S.A.",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr. Deepti Mishra",
    description:
      "NTNU, Norway",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr. Kai Gobbel",
    description:
      "SRI Research, U.S.A.",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr. Mayank S. Jha",
    description:
      "École Polytechnique de l'Université de Lorraine, France",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr. Signe Riemer-Sørensen",
    description:
      "SINTEF Digital, Norway",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr. Zuolu Wang",
    description:
      "University of Huddersfield, U.K.",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Mr. Roald Anfinsen",
    description:
      "Aker Solutions, Norway",
  }
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};



const Advisorycommitee = () => {
  return (
    <section id="Advisorycommitee" className="mx-auto w-5/6 py-20">
      <motion.div
      // onViewportEnter={() => setSelectedPage(SelectedPage.Advisorycommitee)}
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
          <HText>International Advisory Commitee</HText>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-6 md:flex md:flex-wrap text-sm"
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

export default Advisorycommitee;

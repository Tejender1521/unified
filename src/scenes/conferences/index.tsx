import ActionButton from "@/shared/ActionButton";
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
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "The International Conference on Maintenance Engineering (IncoME)",
    description:
      "IncoME aims to provide a common platform by which professionals, engineers, practitioners, and researchers working in the field of plant maintenance and reliability can share their experiences.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "The Efficiency and Performance Engineering Network (TEPEN) Conferences",
    description:
      "(TEPEN) is an international network of world leading researchers in the field of efficiency and performance engineering.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "International Conference on Damage Assessment of Structures (DAMAS)",
    description:
      "DAMAS is one of the most influential conferences in the field of structural damage identification and machine fault diagnosis in the world and is held every two years.",
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

const Conferences = ({ setSelectedPage }: Props) => {
  return (
    <section id="conferences" className="mx-auto -mt-10 min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
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
          <HText>Conferences</HText>
          <p className="my-5 text-sm">
            The 3-day event will provide the ideal opportunity for researchers,
            industrialists, and equipment manufacturers/suppliers to meet, share
            ideas and learn about the latest scientific and technological
            advances in all of the listed fields, along with the future
            directions that each of the fields is taking.
          </p>
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
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        {/* <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex"> */}
        {/* GRAPHIC */}
        {/* <img
            className="mx-auto w-96 rounded-xl "
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          /> */}

        {/* DESCRIPTION */}
        {/* <div>
            
            <div className="relative">
              <div className="mt-8 before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    Unified International Conference{" "}
                    <span className="text-primary-500">Welcomes You</span>
                  </HText>
                </motion.div>
              </div>
            </div> */}

        {/* DESCRIPT */}
        {/* <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                On behalf of the United International Conference on Emerging
                technologies of:
                <br />
                ● INTPART-UTFORSK Project on Cyber-physical Systems (Professor
                Maneesh Singh, The Western Norway University of Applied
                Sciences),
                <br />
                ● IncoME conference (Professor Jyoti Sinha, University of
                Manchester),
                <br />
                ● TEPEN Conference (Professor Andrew Ball, University of
                Huddersfield, UK and Professor Fulei Chu, Tsinghua University,
                China)
                <br />● DAMAS Conference (Professor Carol Featherston, Cardiff
                University; Professor Huajiang Ouyang, University of Liverpool;
                and Professor Anish Roy, Loughborough University)
              </p>
              <p className="mb-5">
                It is our pleasure to invite you to the conference to be held
                from 26th November to 28th November 2024 at the Malaviya
                National Institute of Technology (MNIT), Jaipur, India.
              </p>
            </motion.div> */}

        {/* BUTTON */}
        {/* <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div> */}
        {/* </div> */}
        {/* </div> */}
      </motion.div>
    </section>
  );
};

export default Conferences;

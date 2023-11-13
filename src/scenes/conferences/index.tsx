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

const Conferences = () => {
  return (
    <section id="conferences" className="mx-auto -mt-10 min-h-full w-5/6 py-20">
      <motion.div
      // onViewportEnter={() => setSelectedPage(SelectedPage.Conferences)}
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
              // setSelectedPage={setSelectedPage}
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
        <motion.div
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
            Due to the shared interests, it seems sensible that we should
            collaborate more closely by organising a single, large,
            wide-coverage conference. The Malaviya National Institute of
            Technology is delighted to be host this event at the historic and
            culturally rich city of Jaipur, India.
            <br />
            <br />
            The combined conference, which we are informally calling “UNIfied
            2024” will bring together engineers, scientists and technologists,
            researchers, developers, and practitioners who work in the area of:
            <br />
            1. Sensors and Measurement Systems
            <br />
            2. Condition Monitoring and Predictive Maintenance
            <br />
            3. Industrial Internet of Things (IIoT)
            <br />
            4. Cyber physical systems (CPS)
            <br />
            5. Artificial Intelligence / Machine Learning in Maintenance and
            Production Environment
            <br />
            6. Related Government Policies
          </p>
        </motion.div>

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

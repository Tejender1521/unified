import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
// import BenefitsPageGraphic from "@/assets/about.webp";
// import { Button } from "flowbite-react";
import Img from "@/assets/visa.webp";
// import Visa from "./Visa";

// const visa: Array<BenefitType> = [
//   {
//     icon: <HomeModernIcon className="h-6 w-6" />,
//     title: "State of the Art Facilities",
//     description:
//       "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
//   },
//   {
//     icon: <UserGroupIcon className="h-6 w-6" />,
//     title: "100's of Diverse Classes",
//     description:
//       "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
//   },
//   {
//     icon: <AcademicCapIcon className="h-6 w-6" />,
//     title: "Expert and Pro Trainers",
//     description:
//       "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
//   },
// ];

// const container = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.2 },
//   },
// };

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Visa = () => {
  return (
    <section id="visa" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div >
        {/* HEADER */}
        {/* <motion.div
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
          <HText>MORE THAN JUST GYM.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div> */}

        {/* BENEFITS */}
        {/* <motion.div
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
        </motion.div> */}

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto w-96 rounded-xl "
            alt="benefits-page-graphic"
            src={Img}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
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
                    Apply for an invitation letter for{" "}
                    <span className="text-primary-500">Visa Purposes</span>
                  </HText>
                </motion.div>
              </div>
            </div>

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
                Please click the button below, fill out the form with the
                correct information, and an invitation letter in PDF version
                will be sent to you via email shortly.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                {/* <Button outline gradientDuoTone="pinkToOrange">
                  Apply Now
                </Button> */}
                <button
                  type="submit"
                  
                  className="mt-5 rounded-lg bg-secondary-500 px-10 py-3 transition duration-500 hover:text-red-600"
                >
                  <a target="_blank" href="https://forms.gle/3hcsePc2qQuH4ZyZ8">Apply Now</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Visa;

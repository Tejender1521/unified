import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/about.webp";
// import Welcome from "./Welcome";




const Registration = () => {
  return (
    <section id="registration" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div>
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
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
                    <span className="text-primary-500">Registration</span>
                  </HText>
                </motion.div>
              </div>
            </div>

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
                Abstract acceptance notification. Two weeks after submission
                <br />
                ● 30/04/24: Abstract submission deadline
                <br />
                ● 4/07/2024: Early registration deadline
                <br />
                ● 7/07/2024: Full paper submission deadline.
                <br />
                ● 6/08/2024: Paper acceptance notification
                <br />
                ● 22/10/2024: Registration deadline
                <br />● 26-28/11/2024: Conference
              </p>
              
            </motion.div>

          
          </div> */}
          {/* REGISTRATION FEES */}
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
                    <span className="text-primary-500">Registration Fees</span>
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
                <br />
                ● Indian research scholars – Rs. 4000/-
                <br />
                ● International research scholars - $200
                <br />
                ● Indian academicians – Rs. 7000/-
                <br />
                ● International academicians - $350
                <br />
                ● In Hybrid Mode (Only for International Participants) - $100
                <br />
                ● Industry participants from India– Rs. 10000/-
                <br />● Industry participants from outside India – $500
              </p>
              {/* <p className="mb-5">
                It is our pleasure to invite you to the conference to be held
                from 26th November to 28th November 2024 at the Malaviya
                National Institute of Technology (MNIT), Jaipur, India.
              </p> */}
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                {/* <button>
                  Join Now
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Registration;

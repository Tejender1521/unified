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
                ● Indian research scholars (Early bird)– Rs. 4000/-
                <br />● Indian research scholars (after 20/08/24)– Rs. 4700/-{" "}
                <br />● International research scholars (Early bird)- $200{" "}
                <br />● International research scholars (after 20/08/24)- $235{" "}
                <br />● Indian academicians (Early bird)– Rs. 7000/- <br />●
                Indian academicians (after 20/08/24) – Rs. 8200/- <br />●
                International academicians (Early bird) - $350 <br />●
                International academicians (after 20/08/24) - $410 <br />● In
                Hybrid Mode (Only for International Participants -early bird) -
                $100 <br />● In Hybrid Mode (Only for International Participants
                -after 20/08/24) - $117 <br />● Industry participants from India
                (Early bird)– Rs. 10,000/- <br />● Industry participants from
                India (after 20/08/24)– Rs. 11,700/-
                <br />● Industry participants from outside India (Early bird) –
                $500 <br />● Industry participants from outside India (after
                20/08/24) – $588
              </p>
            </motion.div>

            <div className="relative">
              <div className="mt-8 before:absolute before:-top-20 before:-left-20 ">
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
                    <span className="text-primary-500">Bank Details</span>
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
                <br />●Bank Name:   ICICI Bank <br />●Account Number:   676801700388 <br />●Payee
                Name:   Registrar (sponsored research), MNIT, Jaipur <br />●IFSC code: 
                ICIC0006768 <br />●Branch address:  MREC Branch, Malaviya National
                Insititute of Technology, Jaipur- 302017 <br />●MICR No.:  302229031
                <br />●SWIFT/BIC:   ICICINBBNRI <br />●Country:    India
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Registration;

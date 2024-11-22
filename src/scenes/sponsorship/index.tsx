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
import Img1 from "@/assets/citypalace.jpg";
import Img2 from "@/assets/TCS.jpg"



const Sponsorship = () => {
  return (
    <section id="registration" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div>
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
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
                    <span className="text-primary-500">Sponsorship</span>
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
                The organising committee offers opportunities for sponsorship to
                advertise your company, products and services during the
                conference. <br />
                <br />
                (1) Diamond Sponsor: INR 5,00,000 (Includes 4 registrations + 1
                exhibition booth + Full page in Abstract book)
                <br />
                (2) Platinum Sponsor: INR 3,00,000 (Includes 3 registrations + 1
                exhibition booth + Full page in Abstract book) <br />
                (3) Gold Sponsor: INR 2,00,000 (Includes 2 registrations + 1
                exhibition booth + One half page in Abstract book) <br />
                (4) Silver Sponsor: INR 1,00,000 (Includes 1 registration + 1
                exhibition booth + One half page in Abstract book) <br />
                (5) Bronze Sponsor: INR 50,000 (Includes 1 registration)
              </p>
            </motion.div>
          </div>
        </div>
        <motion.div>
          <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
            {/* GRAPHIC */}
            <img
              className="mx-auto w-96 rounded-xl "
              alt="benefits-page-graphic"
              src={Img2}
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
                      <span className="text-primary-500">
                        Sponsored By :: TCS Research
                      </span>
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
                  TCS Research focuses at the intersection of computing and the
                  physical, biological, behavioral, and mathematical sciences to
                  build sustainable futures.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <div>
            {/* TITLE */}
            <div className="relative">
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
                  <span className="text-primary-500">Terms and Conditions</span>
                </HText>
              </motion.div>
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
                (1) All sponsorships will be confirmed on first-come, first
                served basis. <br />
                (2) Upon confirmation, sponsorship is to be deposited in
                conference account within 15 days. <br />
                (3) No cancellation policy.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Sponsorship;

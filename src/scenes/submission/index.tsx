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




const Submission = () => {
  return (
    <section id="submission" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div>
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
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
                    <span className="text-primary-500">Submission</span>
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
                <br />● Please submit your paper in Microsoft Conference
                Management Tool (CMT) by visiting the link:{" "}
                <span>
                  <a
                    className="text-primary-500"
                    href="https://cmt3.research.microsoft.com/UNIfied2024/Submission/Index"
                  >
                    {" "}
                    Click here
                  </a>
                </span>
                <br />
                <br />● Submission guideline in CMT:
                <span>
                  <a
                    className="text-primary-500"
                    href="https://cmt3.research.microsoft.com/docs/help/author/author-submission-form.html"
                  >
                    {" "}
                    Click here
                  </a>
                </span>
                <br />
                <br />● Full paper submission: The full paper should be
                formatted as per guidelines given:
                <span>
                  <a
                    className="text-primary-500"
                    href="https://link.springer.com/book/9783031494123"
                  >
                    {" "}
                    Click here
                  </a>
                </span>
                <br />
                <br />● Paper submission template:
                <span>
                  <a
                    className="text-primary-500"
                    download="splnproc1703.docm"
                    href="/splnproc1703.docm"
                  >
                    {" "}
                    Click here
                  </a>
                </span>
                <br />
              </p>
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

export default Submission;

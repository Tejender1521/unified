
import HText from "@/shared/HText";
import { motion } from "framer-motion";
import scope from "../../assets/scope.webp";




const Scope = () => {
  return (
    <section id="Scope" className="mx-auto -mt-10 min-h-full w-5/6 py-20">
      <motion.div
      // onViewportEnter={() => setSelectedPage(SelectedPage.Scope)}
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
          <HText>Scope</HText>
          <p className="my-4 text-sm">
            The conference covers a broad area with multi-disciplinary interests
            in the fields of plant maintenance, asset management, reliability,
            condition monitoring, artificial intelligence and related areas,
            ranging from fundamental research to real-world applications.
          </p>
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img
            className="mx-auto w-96 rounded-xl "
            alt="benefits-page-graphic"
            src={scope}
          />

          <div>
            {/* <div className="relative">
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
              <p>
                The conference welcomes the submission of papers in the nature
                of original research, technical review and tutorial from the
                following, but not limited to, cyber physical systems
                applications in following areas:
                <br />
                1. Artificial Intelligence / Machine Learning
                <br />
                2. Asset Management <br />
                3. Biomedical Damage Detection and Analysis <br />
                4. Condition Monitoring and Machine Health Monitoring <br />
                5. Condition-based and Predictive Maintenance <br />
                6. Damage Assessment & Health Management <br />
                7. Electrical Vehicle Energy Management <br />
                8. Health, Safety & Carbon Neutralization with CPS <br />
                9. Industrial Internet of Things (IIoT) <br />
                10. Life Cycle Cost Optimisation <br />
                11. Machine Lube Oil Analysis & Monitoring <br />
                12. Maintenance Auditing <br />
                13. Maintenance Organisation <br />
                14. Maintenance Performance Measurement <br />
                15. Manufacturing Process Monitoring <br />
                16. Mobile Technology <br />
                17. Non-Destructive Testing with CPS <br />
                18. Plant Outage <br />
                19. Prognostics and Health Management <br />
                20. Reliability, Availability, Maintainability & Safety <br />
                21. Sensors, Instrumentation and Measurement Systems <br />
                22. Signal and Image Processing Methods in CPS <br />
                23. Structural Integrity <br />
                24. Vibro-acoustics Monitoring
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
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Scope;

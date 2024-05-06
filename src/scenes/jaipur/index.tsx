import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

import Img1 from "@/assets/citypalace.jpg";
import Img2 from "@/assets/jantar.jpg";
import Img3 from "@/assets/jalmahal.jpg";
import Img4 from "@/assets/albert.jpg";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Jaipur = () => {
  return (
    <section id="visa" className="mx-auto min-h-full w-5/6 py-20">
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
        <HText>About Jaipur</HText>
      </motion.div>
      <motion.div>
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto w-96 rounded-xl "
            alt="benefits-page-graphic"
            src={Img1}
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
                    <span className="text-primary-500">CITY PALACE</span>
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
                Located deep within the walled city, the City Palace Complex was
                conceived and built by Maharaja Sawai Jai Singh II, the founder
                of Jaipur. A beautiful fusion of Mughal and Rajput architecture,
                the palace is still home to the last ruling royal family which
                lives in a private section of the palace. Maharaja Sawai Jai
                Singh II is credited with building most of the structures, but
                it was expanded upon by later rulers as well. Mubarak Mahal now
                houses the Maharaja Sawai Man Singh II Museum and displays a
                vast and unique collection of royal costumes, delicate Pashmina
                (Kashmiri) shawls, Benaras silk saris, and other dresses with
                Sanganeri prints and folk embroidery. The clothes of Maharaja
                Sawai Madho Singh I are also on display.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

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
                    <span className="text-primary-500">JANTAR MANTAR</span>
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
                Now a UNESCO World Heritage Site, Jantar Mantar in Jaipur is
                considered to be the largest of the five astronomical
                observatories built by Maharaja Sawai Jai Singh II, the founder
                of Jaipur. It contains sixteen geometric devices, designed to
                measure time, track celestial bodies and observe the orbits of
                the planets around the sun. It also houses the Interpretation
                Centre that helps the tourists to understand about the working
                principles & chronolgy of the observatory.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div>
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto w-96 rounded-xl "
            alt="benefits-page-graphic"
            src={Img3}
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
                    <span className="text-primary-500">JAL MAHAL</span>
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
                One of the most wonderful sights in Jaipur is the beautiful Jal
                Mahal or Lake Palace. The light, sand coloured stone walls and
                the deep blue of the water make for a wonderful contrast. The
                palace appears to float in the centre of Man Sagar Lake, where
                its magnificent exteriors can be enjoyed by tourists.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div>
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto w-96 rounded-xl "
            alt="benefits-page-graphic"
            src={Img4}
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
                      ALBERT HALL MUSEUM (CENTRAL MUSEUM)
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
                The building gets its name from The Victoria and Albert Museum
                in London, the inspiration for its design. The exquisitely built
                Albert Hall is housed in the centre of Ram Niwas Garden. Sir
                Swinton Jacob (who is also the mastermind behind many other
                palaces in Rajasthan) conceptualised and designed it using
                styles from the Indo-Sarcenic architecture and the Prince of
                Wales laid the foundation stone of the building in 1876. The
                museum displays a wide range of metal objects, wood crafts,
                carpets, stone and metal sculptures, arms and weapons, natural
                stones and ivory goods.
              </p>
            </motion.div>
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                {/* <Button outline gradientDuoTone="pinkToOrange">
                  Apply Now
                </Button> */}
                <button
                  type="submit"
                  className="mt-5 rounded-lg bg-secondary-500 px-10 py-3 transition duration-500 hover:text-red-600"
                >
                  <a
                    target="_blank"
                    href="https://www.tourism.rajasthan.gov.in/jaipur.html"
                  >
                    Know More
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Jaipur;

import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
// import BenefitsPageGraphic from "@/assets/about.webp";
// import { Button } from "flowbite-react";
import Img from "@/assets/visa.webp";
import Img2 from "@/assets/hotel.jpeg";
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

const Accomodation = () => {
  return (
    <section id="visa" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div>
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
                    <span className="text-primary-500">
                      For Travel: Reaching Jaipur
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
                (1) By Air: Sanganer Airport is 10 Km away from the main city
                and has both Domestic and International Terminus which is 7 Km
                and 10 Km far respectively. All the major Airlines like Air
                India, IndiGo, Spicejet connects Jaipur with the other major
                cities in India. <br />
                (2) By Rail: You can travel to Jaipur by trains such as Shatabdi
                Express which is air-conditioned, very comfortable and connects
                Jaipur to many important Indian cities like Delhi, Mumbai,
                Ahmedabad, Jodhpur, Udaipur, Jammu, Jaisalmer, Kolkata,
                Ludhiana, Pathankot, Haridwar, Bhopal, Lucknow, Patna,
                Bangalore, Chennai, Hyderabad and Goa. <br />
                (3) By Bus: Taking a bus to Jaipur is a pocket friendly and very
                convenient idea if you are looking to have a budget holiday. The
                Rajasthan State Road Transport Corporation (RSRTC) runs regular,
                Volvo (air-conditioned and non-air-conditioned) and deluxe buses
                between Jaipur and other cities within the state. <br />
                (4) By Road: A road trip to Jaipur is a lot of fun. The
                Delhi-Jaipur National Highway offers a smooth ride (260
                kilometres) with plenty of restaurants and amenities on the way.
                The road leading to Jaipur is well-connected by National
                Highways 8, 11 and 12.
              </p>
            </motion.div>

            {/* BUTTON */}
          </div>
        </div>
      </motion.div>
      <motion.div>
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
                    <span className="text-primary-500">For Accomodation</span>
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
                (1) RICEM Hostel RICEM Hostel State Resource Centre, 7-A, Jhalana
                Institutional Area, Jhalana Doongri, Jaipur <br />
                (2) Red Fox Hotel, Jaipur Opp. MNIT College, Jawahar Lal Nehru Marg,
                Bajaj Nagar, Jaipur
                <br />
                (3) Hyatt Place Jaipur Malviya Nagar Apex Circle, Malviya Nagar,
                Malviya Nagar, Jaipur
                <br />
                (4) Hotel Keptown C 39 Behind world trade park Maha Laxmi Nagar,
                Malviya Nagar, Jaipur
                <br />
                (5) FabHotel Prime The Wish Plot-1, Girdhar Marg, opp. Haldiya
                House, Lal Bahadur Nagar East, Sunder Nagar, Malviya Nagar,
                Malviya Nagar, Jaipur
                <br />
                (6) Hotel Rang Mahal Hotel Rang Mahal C-39,HARI MARG,OPP. KARDHANI
                SHOPPING CENTRE,NEAR POLICE STATION, MALVIYA NAGAR, Jaipur
                <br />
                (7) Hotel The Connaught House Yanela - The Connaught House Jaipur
                HH91, Calgiri Marg, Block-A, Block-B, Malviya Nagar, Jaipur
                <br />
              </p>
            </motion.div>

            {/* BUTTON */}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Accomodation;

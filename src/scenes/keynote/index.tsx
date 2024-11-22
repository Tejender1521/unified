
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

import Img1 from "@/assets/citypalace.jpg";


const benefits: Array<BenefitType> = [
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Uday Kumar, Professor and Head of Subject, Head of Division",
    description:
      "Prof. Uday Kumar is the Chair Professor of Operation and Maintenance Engineering and Director of Luleå Railway Research Center at LTU (JVTC). Earlier, he has been a visiting faculty at Imperial College London, Helsinki University of Technology, Helsinki ( under European Mining Program), an external Examiner & Program Reviewer for the Graduate Program in Reliability and Maintenance at University of Manchester, UK, a Visiting Guest Professor at National Science Foundation sponsored Center of Excellence for Intelligent Maintenance Systems at University of Cincinnati, Ohio, USA. Prof. Kumar was Board member of National Swedish Maintenance Society (2010-2022), Chairman of the Scientific Council of Swedish National Maintenance Society (2006-2016) and was member of the Scientific Advisory Council of RAILENIUM- Invest in Future Program of the Govt of France (2014-2018)... ",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Dr. Alok K. Verma, P.E., CMfgE Powell Chair Professor and Department Head Marine Engineering Technology Department Texas A&M University at Galveston",
    description:
      "Dr. Alok K. Verma is a Professor, Powell Chair, and Head of the Marine Engineering Technology Department at Texas A&M University in Galveston, TX. Dr. Verma received his B.S. in Aeronautical Engineering from the famed institution IIT Kanpur, MS in Engineering Mechanics, and Ph.D. in Mechanical Engineering from ODU. Prof. Verma is a licensed professional engineer in Virginia and a certified manufacturing engineer with certifications in Lean...",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title:
      "Andrew Ball, Pro Vice-Chancellor (Research Innovation and Knowledge Exchange), Vice-Chancellor's Office",
    description:
      "Professor Andrew Ball is Pro Vice-Chancellor for Research and Enterprise and Professor of Diagnostic Engineering at the University of Huddersfield. He holds several visiting and honorary appointments, including Honorary Visiting Professor at Tsinghua University, Guest Professor at Tianjin University Visiting Professor at Taiyuan University of Technology and Honorary Professor at Beijing Institute of Technology. In addition to his academic roles, Professor Ball serves as Co-Editor-in-Chief of the Journal of Dynamics, Monitoring and Diagnostics. His achievements in the field have been recognized through various awards, including The International Condition Monitoring Society Prize in 2019 and The British Institute of Non-Destructive Testing COMADIT Prize in 2020... ",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Venkataramana Runkana, Chief Scientist at TCS Research",
    description:
      "Venkataramana Runkana is a chief scientist with TCS Research and leads the research program for Manufacturing and Engineering domains. He has nearly 30 years of experience in process modelling, simulation and optimization, industrial analytics and digital twins, process development, scale-up and design, and nanomaterials. A chemical engineer by education, Venkat holds a PhD in Earth and Environmental Engineering from Columbia University, New York, USA... ",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Faisal Khan,Department Head, Chemical Engineering",
    description:
      "Prof. Faisal Khan is a distinguished academic with extensive experience in environmental and chemical engineering. He holds a Ph.D. in Environmental Engineering from Pondicherry University (1998), an M.E. in Chemical Engineering from the University of Roorkee, India (1994), and a B.S. in Chemical Engineering from Aligarh Muslim University, India (1992). His Research Interests incudes, Offshore Safety and Risk Engineering, Offshore Asset Integrity Assessment and Management and Process Modeling and System Design.... ",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title:
      "Rakesh Mishra,Prof, Head of Research for the Department of Engineering and Technology and UoA12 Co-ordinator",
    description:
      "Professor Rakesh Mishra joined the School of Computing and Engineering at the University of Huddersfield in 2000. He progressed from Research Fellow to Lecturer in 2003, Senior Lecturer in 2004, Reader in 2009, and was conferred as Professor of Fluid Dynamics in 2011. Before this, he worked at MNNIT, Allahabad, and completed his Ph.D. at IIT Delhi. Prof. Mishra specializes in Thermo-fluids, teaching modules such as Aerodynamics, Thermodynamics, and Computational Fluid Dynamics. He leads the ‘Energy Emission and Environmental Research Group’ and contributes to IMechE-accredited engineering courses..... ",
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

const Keynote = () => {
  return (
    <section id="conferences" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
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
          <HText>Keynotes</HText>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex md:flex-wrap"
          // initial="hidden"
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
            />
          ))}
        </motion.div>


      </motion.div>
    </section>
  );
};

export default Keynote;

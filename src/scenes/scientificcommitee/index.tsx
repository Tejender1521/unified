import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, BenefitTypeWithLink, SelectedPage } from "@/shared/types";
import {
  UserIcon
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";









const benefits: Array<BenefitType> = [
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof. C. 'Nat' Nataraj",
    description: "Villanova University, USA",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof. Arvind Keprate",
    description: "Oslomet, Norway",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof. A.K. Darpe",
    description: "IIT Delhi, India",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof. A.S. Sekhar",
    description: "IIT Palakkad, India",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr. Amir Rahbarimanesh",
    description: "The University of Manchester, UK",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr. Alok Kumar Verma",
    description: "Agency for Science,Technology and Research, Singapore",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Amiya Ranjan Mohanty",
    description: "IIT Kharagpur, India",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Anil Kumar",
    description: "Wenzhou University, China",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Asoke K. Nandi",
    description: "Brunel University London, UK",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof. Basim Al-Najjar",
    description: "Linnaeus University, Sweden",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr.Chetan Kulkarni",
    description: "US - NASA Ames Research Center, USA",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof.	David	Baglee",
    description: "University of Sunderland, UK",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr.Deepti Mishra",
    description: "Norwegian University of Science and Technology",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof.	F. Gu",
    description: "University of Huddersfield, UK",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof.	Filipe	Didelet",
    description: " Polytechnic Institute of Setubal, Portugal",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof. Jiawei	Xiang",
    description: "Wenzhou University, China",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr	Kassandra A. 	Papadopoulou",
    description: "The University of Manchester, UK",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof.	Khanindra	Pathak",
    description: "IIT Kharagpur, India",
  },

  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof. Lin	Jing",
    description: "Beihang University, Beijing, China ",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof.	Luís Andrade	Ferreira",
    description: "University of Porto, Portugal",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Mrs.María del Carmen García Lizárraga",
    description: "Lawrence Berkeley National Laboratory, USA",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr.Monica Tanwar",
    description: "IIT Jodhpur",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof. Mayank 	Tiwari",
    description: "IIT Patna, India",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof.	Mohamed	Ben-Daya",
    description: "American University of Sharjah, UAE",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr.	Mohit Lal",
    description: "NIT Rourkela, India",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr.Neeraj Goyal",
    description: "IIT Kharagpur, India",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Mr	N.S. 	Joshi",
    description: "Bhabha Atomic Research Centre, India",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof.OP Yadav",
    description: "NCAT, USA",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof.	Radoslaw	Zimroz",
    description: "Wroclaw University of Technology, Poland",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof.	Raghuvir 	Pai",
    description: "Manipal Academy of Higher Education, India",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof.	Rajesh 	Kumar",
    description:
      "Sant Longowal Institute of Engineering & Technology Longowal, INDIA",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof. Rajiv Tiwari",
    description: "IIT Guwahati, India",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof.	Ramin	Karim",
    description: "Luleå University of Technology, Sweden",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr.	Ravdeep	Kour",
    description: "Luleå University of Technology, Sweden",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr.Signe Riemer",
    description: "Sorensen, SINTEF AS",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof.	S.P.	Harsha",
    description: "IIT Roorkee, India",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr	Soumendu	Jana",
    description: "NAL, Bangluru, India",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof.	Tore 	Markeset",
    description: "University of Stavanger, Stavanger, Norway",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr.	Wolfgang	Hahn",
    description: "Babcock International Group, UK",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof.	Xie	Min",
    description: "City University of Hong Kong, Hong Kong",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Prof. Z.K. Peng",
    description: "Shanghai Jiao Tong University, China",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};



const Scientificcommitee = () => {
  return (
    <section id="Scientificcommitee" className="mx-auto w-5/6 py-20">
      <motion.div
      // onViewportEnter={() => setSelectedPage(SelectedPage.Scientificcommitee)}
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
          <HText>Advisory & Scientific Commitee Members</HText>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-6 text-sm md:flex md:flex-wrap"
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
              // link={benefit.link}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Scientificcommitee;

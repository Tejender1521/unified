import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  // setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      {/* <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink> */}
      {/* <a
        href="https://easychair.org/conferences/?conf=unified2024"
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        target="_blank"
      >
        <p>Log in</p>
      </a> */}
      <button
        type="submit"
        className="mt-5 rounded-lg bg-secondary-500 px-10 py-3 transition duration-500 hover:text-red-600"
      >
        <a target="_blank" href="https://easychair.org/conferences/?conf=unified2024">
          Apply Now
        </a>
      </button>
    </motion.div>
  );
};

export default Benefit;

import {useState} from 'react'
import { SelectedPage } from "@/shared/types";
import heroImage from "../../assets/image1.webp";


import FadeIn from "../../components/FadeIn";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const flexBetween = "flex items-center justify-between";

  return (
    <section id="home" className="my-16 h-full gap-16  py-5 pb-0">
      <div
        className="relative flex h-screen flex-col items-center"
        style={{
          background: `url(${heroImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          
        }}
      >
        
        <FadeIn delay={0.2} direction="down" padding fullWidth>
          <h1 className="mt-[90px] max-w-[1050px] text-center text-3xl leading-tight z-10 text-white xs:text-[64px]">
            The Unified International Conference on Emerging Technologies of
          </h1>
        </FadeIn>
        <FadeIn delay={0.4} direction="down" padding fullWidth>
          <h5 className="mt-6 max-w-[500px] text-center text-lg z-10 text-white xs:text-2xl">
            INTPART-UTFORSK Project, IncoME, TEPEN and DAMAS
          </h5>
        </FadeIn>
        {/* <FadeIn delay={0.2} direction="up" padding fullWidth>
          <div className="relative mt-11 w-full xs:w-[460px]">
            <input
              type="text"
              placeholder="Search"
              className="bg-primary w-full rounded-full py-4 pl-6 pr-[68px] text-base text-white
              placeholder-white outline-none xs:text-lg"
            />
            <img
              src={searchIcon}
              alt=""
              className="absolute top-2/4 right-3 h-11 w-11 -translate-y-2/4 cursor-pointer"
            />
            <div className={`${flexBetween} `}>
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Us
              </ActionButton>
            </div>
          </div>
        </FadeIn> */}

        <div className="absolute bottom-0 h-[50px] w-full bg-[linear-gradient(180deg,_#ffffff00_0%,_#FFF_100%)] xs:h-[150px]" />
      </div>
    </section>
  );
};

export default Home;

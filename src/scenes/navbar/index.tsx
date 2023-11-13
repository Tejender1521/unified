import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/mnitlogo.png";
// import Link from "./Link";
import { Link } from "react-router-dom";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = () => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  // const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav className="h-0">
      <div
        className={` ${flexBetween} fixed top-0 z-30 w-full bg-opacity-40 py-3 backdrop-blur-sm backdrop-filter`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img alt="logo" src={Logo} width={60} className="rounded-md" />

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  {/* <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  /> */}
                  <Link to="/">Home</Link>
                  <Link to="/registration">Registration</Link>
                  <Link to="/visa">Visa</Link>
                  <Link to="/comingsoon">Submission</Link>
                  <Link to="/comingsoon">Programme</Link>
                  <Link to="/comingsoon">Commitees</Link>
                  <Link to="/comingsoon">Keynotes</Link>
                  <Link to="/comingsoon">Awards</Link>

                  {/* <Link
                    page="Welcome"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  /> */}
                  {/* <Link
                    page="Conferences"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Visa"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  /> */}
                </div>
                {/* <div className={`${flexBetween} gap-8`}>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                  </ActionButton>
                </div> */}
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link to="/" onClick={() => setIsMenuToggled(!isMenuToggled)}>
              Home
            </Link>
            <Link
              to="/registration"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              Registration
            </Link>
            <Link to="/visa" onClick={() => setIsMenuToggled(!isMenuToggled)}>
              Visa
            </Link>
            <Link
              to="/comingsoon"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              Submission
            </Link>
            <Link
              to="/comingsoon"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              Programme
            </Link>
            <Link
              to="/comingsoon"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              Commitees
            </Link>
            <Link
              to="/comingsoon"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              Keynotes
            </Link>
            <Link
              to="/comingsoon"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              Awards
            </Link>

            {/* <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            /> */}
            {/* <Link
              page="Welcome"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Conferences"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Visa"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            /> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

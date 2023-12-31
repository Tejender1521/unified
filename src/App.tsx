import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
// import OurClasses from "@/scenes/ourClasses";
import Benefits from "@/scenes/welcome";
import ContactUs from "@/scenes/contactUs";
import Footer from "@/scenes/footer";
import Conferences from "@/scenes/conferences";
import Visa from "@/scenes/visa";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import { Outlet } from "react-router-dom";
function App() {
  // const [selectedPage, setSelectedPage] = useState<SelectedPage>(
  //   SelectedPage.Home
  // );
  // const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY === 0) {
  //       setIsTopOfPage(true);
  //       setSelectedPage(SelectedPage.Home);
  //     }
  //     if (window.scrollY !== 0) setIsTopOfPage(false);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        // isTopOfPage={isTopOfPage}
        // selectedPage={selectedPage}
        // setSelectedPage={setSelectedPage}
      />
      {/* <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <Conferences setSelectedPage={setSelectedPage} />
      <Visa setSelectedPage={setSelectedPage}/>
      {/* <OurClasses setSelectedPage={setSelectedPage} /> */}
      {/* <ContactUs setSelectedPage={setSelectedPage} /> */}
      <Outlet/>
      <Footer />
    </div>
  );
}

export default App;

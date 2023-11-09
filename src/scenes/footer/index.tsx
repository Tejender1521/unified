import Logo from "@/assets/mnitlogo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-10">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-10 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} className="h-24 rounded-lg" />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>Copyright © 2024 UNIfied 2024 - All Rights Reserved.</p>
        </div>
        {/* <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Trainers</p>
          <p className="my-5">Facilities</p>
          <p>Get Us Know</p>
        </div> */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">MNIT Jaipur</p>
          <p>gsoni.mech@mnit.ac.in</p>
          <p>(+91)-9549654559</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

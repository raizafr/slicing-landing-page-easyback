import { ReactSVG } from "react-svg";
import Logo from "../../public/images/logo.svg";
import Facebook from "../../public/images/icon-facebook.svg";
import Youtube from "../../public/images/icon-youtube.svg";
import Twitter from "../../public/images/icon-twitter.svg";
import Pinterest from "../../public/images/icon-pinterest.svg";
import Instagram from "../../public/images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-[#2D314E] py-10 text-white flex flex-col md:flex-row items-center lg:px-24 md:px-10 text-center md:text-left ">
      <div className="grid md:grid-cols-3 md:w-2/3 spay">
        <div className="flex flex-col justify-between space-y-6 pb-5 md:pb-0 md:space-y-0">
          <ReactSVG src={Logo} className="" />
          <div className="flex flex-row gap-3 md:gap-2 lg:gap-3">
            <a href="">
              <ReactSVG src={Facebook} />
            </a>
            <a href="">
              <ReactSVG src={Youtube} />
            </a>
            <a href="">
              <ReactSVG src={Twitter} />
            </a>
            <a href="">
              <ReactSVG src={Pinterest} />
            </a>
            <a href="">
              <ReactSVG src={Instagram} />
            </a>
          </div>
        </div>
        <div>
          <ul className="space-y-3 opacity-80">
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="mt-3 md:mt-0">
          <ul className="space-y-3 opacity-80">
            <li>Careers</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="md:w-1/3 flex justify-end pt-8 md:pt-0">
        <div className=" space-y-6 pb-5 md:pb-0 md:space-y-7">
          <div className="flex justify-end">
            <button className="button">Request Invite</button>
          </div>
          <p className="opacity-50 text-sm">@Easybank. All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

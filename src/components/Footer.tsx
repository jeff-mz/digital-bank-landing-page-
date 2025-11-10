import iconFacebook from "../assets/images/icon-facebook.svg";
import iconYouTube from "../assets/images/icon-youtube.svg";
import iconTwitter from "../assets/images/icon-twitter.svg";
import iconPinterest from "../assets/images/icon-pinterest.svg";
import iconInstagram from "../assets/images/icon-instagram.svg";
import logo from "../assets/images/logo-light.svg";

const Footer = () => {
  return (
    <footer className="w-full mx-auto bg-primary-blue text-white py-12">
      {/* container */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-center md:items-start">
        {/* logo */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <img src={logo} alt="logo" className="invert brightness-0" />

          {/* icons */}
          <div className="flex gap-4">
            <img
              src={iconFacebook}
              alt="facebook"
              className="w-5 h-5 cursor-pointer hover:brightness-150 transition"
            />
            <img
              src={iconYouTube}
              alt="youtube"
              className="w-5 h-5 cursor-pointer hover:brightness-150 transition"
            />
            <img
              src={iconTwitter}
              alt="twitter"
              className="w-5 h-5 cursor-pointer hover:brightness-150 transition"
            />
            <img
              src={iconPinterest}
              alt="pinterest"
              className="w-5 h-5 cursor-pointer hover:brightness-150 transition"
            />
            <img
              src={iconInstagram}
              alt="instagram"
              className="w-5 h-5 cursor-pointer hover:brightness-150 transition"
            />
          </div>
        </div>

        {/* links */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-10 text-center md:text-left">
          <ul className="flex flex-col gap-3 text-sm text-neutral-gray100">
            <li className="hover:text-primary-green cursor-pointer transition">
              About Us
            </li>
            <li className="hover:text-primary-green cursor-pointer transition">
              Contact
            </li>
            <li className="hover:text-primary-green cursor-pointer transition">
              Blog
            </li>
          </ul>
          <ul className="flex flex-col gap-3 text-sm text-neutral-gray100">
            <li className="hover:text-primary-green cursor-pointer transition">
              Careers
            </li>
            <li className="hover:text-primary-green cursor-pointer transition">
              Support
            </li>
            <li className="hover:text-primary-green cursor-pointer transition">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* button */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <button className="bg-linear-to-bl from-primary-green to-primary-cyan text-white px-6 py-2 rounded-full font-medium hover:opacity-80 transition">
            Request Invite
          </button>
          <p className="text-xs text-neutral-gray200">
            © Easybank. All Rights Reserved
          </p>
        </div>

        {/* copyright */}
        <div className="text-center text-xs max-w-4xl mx-auto">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/jeff-mz">Jafar Mirzapoor</a>.{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

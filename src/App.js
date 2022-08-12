
import Timer from "./components/Countdown/Timer"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./style.css"
import { FaFacebookSquare, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { IoReloadCircle } from 'react-icons/io5';
import { AiFillSetting } from 'react-icons/ai'
import { IoIosDisc } from 'react-icons/io';
import { MdVisibility } from 'react-icons/md'
import { HiMail } from 'react-icons/hi'




export default function App() {


  return (
    <div className="container">
      <div>
        <h1 className="styledTittle">Coming Soon!</h1>
      </div>
      <div>
        <Timer />
      </div>
      <div className="subscribeContainer">
        <div>
          <h1>Subscribe now to get Recent updates!!!</h1>
        </div>
        <div>
          <form>
            <input type="text" id="fmail" name="fmail" placeholder="Enter your email..." />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
      <div className="styledIcons">
        <FaFacebookSquare size="30" />
        <FaTwitter size="30" />
        <FaLinkedin size="30" />
      </div>
      <section className="interestedSection">
        <div className="styledAbout">
          <h2>About us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="interestedDiv">
          <div>
            <IoReloadCircle size="70" className="iconsBackground" />
            <h2>Our process</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div>
            <MdVisibility size="70" />
            <h2>Our vision</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          <div>
            <AiFillSetting size="70" />
            <h2>Our approach</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          <div>
            <IoIosDisc size="70" />
            <h2>Our objective</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>   
            </div>
        </div>
      </section>
      <section className="contactSection">
        <div className="contactSectionContent">
          <HiMail size="40" />
          <h3>GET IN TOUCH</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
        </div>
        <Contact />
      </section>
      <Footer />
    </div>
  )
};


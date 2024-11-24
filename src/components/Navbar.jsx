import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/logo.png.webp"

const Navbar = () => {
    return (
        <div className="px-10 mx-auto flex justify-between fixed w-full z-50 bg-transparent text-white items-center mt-8"  >
            <nav className="flex justify-between gap-6" >
                <a href="#">Home</a>
                <a href="#">Rooms</a>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Pages</a>
                <a href="#">Contact</a>
            </nav>
            <div>
                <img src={logo} alt="img" />
                
            </div>
            <div className="flex justify-between items-center gap-6">
                <span><FontAwesomeIcon icon={faFacebook} /></span>
                <span><FontAwesomeIcon icon={faInstagram} /></span>
                <span><FontAwesomeIcon icon={faSquareTwitter} /></span>
            </div>
            <div className="bg-cyan-500 px-5 py-2">Book A Room</div>
        
        </div>
    )
};





export default Navbar;
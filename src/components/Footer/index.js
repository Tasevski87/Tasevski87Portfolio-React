import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faLinkedin,
    faGithub
} from "@fortawesome/free-brands-svg-icons";


const Footer = () => (
    <div class="social-container">
        <div class="social-container">
        &copy; 2022 Toshe Tasevski
            <a href="https://www.facebook.com/toshe.tasevski/"
                className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/toshe-tasevski-028482222/"
                className="linkedin social">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/Tasevski87"
                className="linkedin social">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
        </div>
    </div>

);

export default Footer;
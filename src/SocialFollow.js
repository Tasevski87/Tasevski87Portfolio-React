import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
    return (
        <div class="social-container">
            
            <div class="social-container">
            
            
                <a href="https://www.facebook.com/learnbuildteach/"
                    className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.linkedin.com/feed/"
                    className="linkedin social">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div>
        </div>
    );
}
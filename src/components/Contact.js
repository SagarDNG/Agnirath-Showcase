import React, { useEffect } from 'react'
import { FaInstagram, FaLinkedin, FaTwitter, FaFlickr } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import Logo from "../images/join-us.png"
import AgnirathLogo from "../images/agnirath-logo-nav.png"
import CFILogo from "../images/cfi-logo.png"
import IITMLogo from "../images/iitm-logo.png"

import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <>
            <div id='contact' className='d-flex align-items-center mb-4'>
                <div className='col-3'>
                    <img data-aos="fade-right" src={Logo} alt="" className='contactLogo mb-3' />
                </div>
                <div data-aos="fade-left" className='text-center col-9'>
                    <p>
                        Email: <a className='contact-email' href="mailto:contact@example.com">contact@example.com</a>
                    </p>
                    <p>
                        Phone: <a className='contact-email' href="tel:+919876543210">+91 98765 43210</a>, <a className='contact-email' href="tel:+919876543211">+91 98765 43211</a>
                    </p>
                </div>
            </div>

            <div className='FooterLogos d-flex align-items-center justify-content-between mb-4 px-5'>
                <div className='primary'>
                    <div className='mx-3'>
                        <a href="https://www.iitm.ac.in/"><img
                            src={IITMLogo} alt=""
                            className='IITM' /></a>
                    </div>
                    <div className='mx-3'>
                        <a href="https://cfi.iitm.ac.in/"><img
                            src={CFILogo} alt=""
                            className='CFI' /></a>
                    </div>
                    <div className='mx-3'>
                        <a href='#home'><img 
                        src={AgnirathLogo} alt="" 
                        className='Agnirath' /></a>
                    </div>
                </div>
                <div className='d-flex secondary'>
                    <div className='mx-3'>
                        <a href="https://www.linkedin.com/company/team-4gnirath/mycompany/">
                            <FaLinkedin className='Linkedin' />
                        </a>
                    </div>
                    <div className='mx-3'>
                        <a href="https://www.twitter.com/TeamAgniRath">
                            <FaTwitter className='Twitter' />
                        </a>
                    </div>
                    <div className='mx-3'>
                        <a href="https://www.flickr.com/photos/196730232@N07">
                            <FaFlickr className='Flickr' />
                        </a>
                    </div>
                    {/* <div className='mx-3'>
                <a href="/">
                    <FaFacebook />
                </a>
            </div> */}
                    <div className='mx-3'>
                        <a href="https://www.instagram.com/Agnirath.IITM">
                            <FaInstagram className='Instagram' />
                        </a>
                    </div>
                    <div className='mx-3'>
                        <a href="mailto:contact@example.com">
                            <FiMail className='Mail' />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-text text-center pb-3 px-3">
                &#169; 2022 <br /> Designed & Developed with &hearts; by Team Agnirath
            </div>
        </>
    )
}

export default Contact
import React, { useEffect } from 'react';
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import { gsap } from 'gsap';

const FooterContainer = () => {
    useEffect(() => {
        gsap.fromTo(".footer-content", 
            { opacity: 0, y: 20 }, 
            { opacity: 1, y: 0, duration: 1 });
    }, []);

    return (
        <div className='mt-20 border-t-[1px] border-gray-300'>
<<<<<<< HEAD
            <Footer container>
=======
            <Footer container className='rounded-none'>
>>>>>>> upstream/development
                <div className="w-full footer-content">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                            <Footer.Brand
                                href="/"
                                name="SACCO"
                                style={{ color: '#487827' }} // Primary color
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                            <div>
<<<<<<< HEAD
                                <Footer.Title title="Useful Links" />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="/loans">Loans</Footer.Link>
                                    <Footer.Link href="/savings">Savings</Footer.Link>
                                    <Footer.Link href="/about">About Us</Footer.Link>
=======
                                <Footer.Title title="Services" />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="/loans">Loans</Footer.Link>
                                    <Footer.Link href="/savings">Savings</Footer.Link>
                                    <Footer.Link href="/about">Microfinance</Footer.Link>
                                    <Footer.Link href="/contact">Scholaships</Footer.Link>
                                    <Footer.Link href="/contact">Downloads</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Quick Links" />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="/loans">About Us</Footer.Link>
                                    <Footer.Link href="/savings">Services</Footer.Link>
                                    <Footer.Link href="/about">Loans</Footer.Link>
>>>>>>> upstream/development
                                    <Footer.Link href="/contact">Contact Us</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Legal" />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                                    <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
<<<<<<< HEAD
                        <Footer.Copyright href="#" by="SACCO" year={2024} />
=======
                        <Footer.Copyright href="#" by="SACCO" year={new Date().getFullYear()} />
>>>>>>> upstream/development
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon href="#" icon={BsFacebook} />
                            <Footer.Icon href="#" icon={BsInstagram} />
                            <Footer.Icon href="#" icon={BsTwitter} />
                            <Footer.Icon href="#" icon={BsGithub} />
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    );
}

export default FooterContainer;
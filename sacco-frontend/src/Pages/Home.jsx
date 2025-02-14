import React, { useEffect } from 'react';
import { gsap } from "gsap";

const HomePage = () => {
    useEffect(() => {
        gsap.from('.hero', { duration: 1, y: -50, opacity: 0 });
        gsap.from('.section-title', { duration: 1, opacity: 0, y: 20, stagger: 0.2, delay: 0.5 });
    }, []);

    return (
        <div className="bg-[#F7E895] text-[#487827]">
            <header className="flex justify-between items-center p-4 bg-[#3D593C] text-[#F7E895]">
                <div className="logo">SACCO Logo</div>
                <nav>
                    <a href="#" className="mx-4 text-[#AEC671]">About Us</a>
                    <a href="#" className="mx-4 text-[#AEC671]">Services</a>
                    <a href="#" className="mx-4 text-[#AEC671]">Membership</a>
                    <a href="#" className="mx-4 text-[#AEC671]">Loans</a>
                    <a href="#" className="mx-4 text-[#AEC671]">News</a>
                    <a href="#" className="mx-4 text-[#AEC671]">Contact Us</a>
                </nav>
                <div>
                    <button className="bg-[#AEC671] text-[#3D593C] px-4 py-2 mx-2">Login</button>
                    <button className="bg-[#AEC671] text-[#3D593C] px-4 py-2">Sign Up</button>
                </div>
            </header>

            <div className="hero bg-cover bg-center h-96" style={{ backgroundImage: "url('https://via.placeholder.com/1200x400')" }}>
                <div className="text-center p-20">
                    <h1 className="text-4xl">Empowering Your Financial Future</h1>
                    <p className="text-lg">Join Our Community of Savers and Borrowers.</p>
                    <button className="bg-[#AEC671] text-[#3D593C] px-4 py-2 mt-4">Join Now</button>
                </div>
            </div>

            <section className="p-8">
                <h2 className="text-2xl section-title">About Us</h2>
                <p>Learn about our history, values, and commitment to our members.</p>
            </section>

            <section className="p-8">
                <h2 className="text-2xl section-title">Our Services</h2>
                <p>Explore the range of services we offer to support your financial needs.</p>
            </section>

            <section className="p-8">
                <h2 className="text-2xl section-title">Membership Benefits</h2>
                <p>Discover the advantages of becoming a member of our SACCO.</p>
            </section>

            <section className="p-8">
                <h2 className="text-2xl section-title">Loans</h2>
                <p>Find out about our various loan products and how to apply.</p>
            </section>

            <section className="p-8">
                <h2 className="text-2xl section-title">News and Updates</h2>
                <p>Stay informed with the latest news and events from our SACCO.</p>
            </section>

            <section className="p-8">
                <h2 className="text-2xl section-title">Contact Us</h2>
                <p>Get in touch with us for any inquiries or assistance.</p>
            </section>

            <footer className="bg-[#5C593D] text-[#F7E895] text-center p-4">
                <p>Quick Links | Newsletter Sign-Up | Privacy Policy</p>
            </footer>
        </div>
    );
};

export default HomePage;
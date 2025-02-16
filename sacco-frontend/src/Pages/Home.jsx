import React, { useEffect } from 'react';
import { gsap } from "gsap";
import TopNav from '../components/Navbar';
import CarouselComponent from '../components/Carousel';
import ProductsAndServices from '../components/ProductsAndServices';
import WhoWeAre from '../components/WhoWeAre';
import CTA from '../components/CTA'
import FooterContainer from '../components/Footer';

const HomePage = () => {
    useEffect(() => {
        gsap.from('.hero', { duration: 1, y: -50, opacity: 0 });
        gsap.from('.section-title', { duration: 1, opacity: 0, y: 20, stagger: 0.2, delay: 0.5 });
    }, []);

    return (
        <div className="bg-[#F7E895] text-[#487827]">
            <TopNav />
            <CarouselComponent />
            <ProductsAndServices />
            <WhoWeAre />
            <CTA />
            <FooterContainer />
        </div>
    );
};

export default HomePage;
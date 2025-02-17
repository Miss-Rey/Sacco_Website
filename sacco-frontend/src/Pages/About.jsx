import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap"; // Import GSAP
import TopNav from "../Components/Navbar";
import Footer from "../Components/Footer";
import myVideo from "../assets/focus-on-yourself.mp4";
import Loader from "/src/Pages/loader.jsx";
import saccoBuilding from "../assets/sacco-building.jpg";
import staffMeeting from "../assets/staff-meeting.jpg";
import communityWork from "../assets/community-work.jpg";

const About = () => {
  const navRef = useRef(null);
  const bottomRef = useRef(null);
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);
  const [loading, setLoading] = useState(true);

  const galleryImages = {
    ALL: [
      { src: 'image1.jpg', alt: 'Image 1' },
      { src: 'image2.jpg', alt: 'Image 2' },
      { src: 'image3.jpg', alt: 'Image 3' },
      { src: 'image4.jpg', alt: 'Image 4' },
    ],
    EVENTS: [
      { src: 'event1.jpg', alt: 'Event 1' },
      { src: 'event2.jpg', alt: 'Event 2' },
    ],
    TRAINING: [
      { src: 'training1.jpg', alt: 'Training 1' },
      { src: 'training2.jpg', alt: 'Training 2' },
    ],
    MARKETING: [
      { src: 'marketing1.jpg', alt: 'Marketing 1' },
      { src: 'marketing2.jpg', alt: 'Marketing 2' },
    ],
  };

  const CommunityGallery = () => {
    const [activeTab, setActiveTab] = useState('ALL');
  
    const handleTabClick = (tab) => {
      setActiveTab(tab);
      gsap.to('.gallery-grid', {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          gsap.to('.gallery-grid', { opacity: 1, duration: 0.3 });
        },
      });
    };

    return (
      <div className="my-20 community-gallery">
        <div className="flex flex-col-reverse lg:flex-row-reverse justify-center items-center gap-5 w-full text-center p-10">
          <div className="flex justify-center items-center w-full lg:w-1/2">
            <img
              src={communityWork}
              alt="Community Work"
              className="w-full lg:w-3/4 rounded-md"
            />
          </div>
          <div className="flex flex-col w-full lg:w-1/2">
            <span className="text-yellow-500 text-3xl lg:text-4xl xl:text-5xl">Social Responsibility</span>
            <span className="text-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Giving Back</span>
            <p className="m-5">
              We actively support community projects and corporate social responsibility initiatives
              aimed at empowering society.
            </p>
          </div>
        </div>

        {/* Gallery Tabs */}
        <div className="tabs flex justify-center gap-5 my-5">
          {['ALL', 'EVENTS', 'TRAINING', 'MARKETING'].map((tab) => (
            <button
              key={tab}
              className={`text-lg font-semibold px-6 py-3 rounded-lg ${activeTab === tab ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-black'} transition-all duration-300`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 px-10">
          {galleryImages[activeTab].map((image, index) => (
            <div
              key={index}
              className={`gallery-item ${index % 2 === 0 ? 'md:col-span-2' : ''} bg-white rounded-lg shadow-lg overflow-hidden`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Scroll-triggered animation
  useEffect(() => {
    const handleScroll = () => {
      const navBottom = navRef.current?.getBoundingClientRect().bottom;
      const bottomTop = bottomRef.current?.getBoundingClientRect().top;
      const videoTop = videoRef.current?.getBoundingClientRect().top;

      if (window.scrollY > navBottom) {
        document.body.classList.add("scrolled");
      } else {
        document.body.classList.remove("scrolled");
      }

      if (bottomTop <= window.innerHeight / 2) {
        bottomRef.current?.classList.add("extended");
      } else {
        bottomRef.current?.classList.remove("extended");
      }

      if (videoTop <= window.innerHeight && videoTop >= 0) {
        setShowVideo(true);
      } else {
        setShowVideo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  // GSAP animations
  useEffect(() => {
    gsap.from(".about-section-text", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(".about-video", {
      opacity: 0,
      scale: 0.8,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.5,
    });

    gsap.from(".staff-section", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.5,
    });

    gsap.from(".community-section", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
      delay: 1,
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <TopNav ref={navRef} />
      <div className="w-full">
        {/* Background Image Section */}
        <div
          className="bg-cover bg-fixed h-80 md:h-96 lg:h-120 xl:h-160 w-full flex justify-center items-center"
          style={{ backgroundImage: `url(${saccoBuilding})` }}
        >
          <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-black">
            ABOUT OUR SACCO
          </p>
        </div>

        {/* Empowering Financial Growth */}
        <div className="flex flex-col justify-center items-center text-center py-10">
          <span className="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-yellow-500 about-section-text">
            Empowering Financial Growth
          </span>
          <p className="px-2 md:px-10 lg:px-20 xl:px-40 py-5 md:py-10 text-sm md:text-base lg:text-lg xl:text-xl about-section-text">
            Our SACCO is committed to providing financial solutions that empower our members. We
            offer savings, credit, and investment opportunities tailored to foster economic growth
            and financial stability.
          </p>
        </div>

        {/* Our Story Video Section */}
        <div className="h-auto overflow-hidden">
          <div className="flex flex-col justify-center items-center mt-10 mb-5">
            <h2 className="text-5xl text-yellow-500 about-section-text">Discover</h2>
            <h1 className="text-4xl text-black font-bold tracking-2 about-section-text">OUR STORY</h1>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-[800px] h-full lg:h-[600px] flex justify-center overflow-hidden">
              <video
                ref={videoRef}
                src={myVideo}
                controls
                className="w-full h-full object-cover about-video"
              ></video>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="my-20 testimonials-section">
          <div className="flex flex-col items-center text-center p-10">
            <span className="text-yellow-500 text-3xl lg:text-4xl xl:text-5xl">What People Say</span>
            <span className="text-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Client Testimonials</span>
          </div>

          {/* Horizontal Scrollable Section */}
          <div className="overflow-hidden w-full flex justify-center items-center relative">
            <div className="testimonial-slider flex gap-10 transition-transform duration-700 ease-in-out">
              {/* Testimonial Cards */}
              {[1, 2, 3, 4].map((client, index) => (
                <div key={index} className="testimonial-card flex-shrink-0 w-[300px] h-[400px] bg-white rounded-md shadow-lg p-5 text-center transition-transform duration-500 ease-in-out">
                  <img
                    src={staffMeeting}
                    alt={`Client ${client}`}
                    className="w-full h-32 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-gray-700">"This SACCO helped me take control of my financial future. The support I received was invaluable!"</p>
                  <span className="block mt-3 font-bold text-lg">John Doe</span>
                  <span className="block text-gray-500 text-sm">Client</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <CommunityGallery />

      </div>
      <Footer />
    </>
  );
};

export default About;
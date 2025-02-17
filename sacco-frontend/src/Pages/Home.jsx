import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
// Home.jsx
import Button from '/src/components/ui/button.jsx';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#CCD2D4] text-[#9FCFA0]">
      {/* Navbar */}
      <Navbar className={`fixed top-0 w-full transition-all duration-300 ${isScrolled ? 'bg-[#A37D3A] shadow-lg' : 'bg-transparent'}`}>
        <NavbarBrand href="#">SACCO</NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="#">Home</NavbarLink>
         <NavbarLink href="#">About Us</NavbarLink>
          <Dropdown.Item href="/governance">Governance</Dropdown.Item>
          <Dropdown.Item href="/sacco-staff">Sacco Staff</Dropdown.Item>
          <Dropdown.Item href="/giving-back">Giving Back</Dropdown.Item>
          <Dropdown.Item href="/faqs">FAQs</Dropdown.Item>
         <NavbarLink href="#">Products & Services</NavbarLink>
          <Dropdown.Item href="/saving-products">Saving Products</Dropdown.Item>
          <Dropdown.Item href="/account-opening">Account Opening</Dropdown.Item>
          <Dropdown.Item href="/request-loans">Request Loans</Dropdown.Item>
          <Dropdown.Item href="/microloans">Microloans</Dropdown.Item>
          <Dropdown.Item href="/insurance-agency">Primary Insurance Agency</Dropdown.Item>
          <Dropdown.Item href="/mobile-banking">Mobile Banking</Dropdown.Item>
          <Dropdown.Item href="/mpesa-paybill">M-Pesa PayBill Deposit</Dropdown.Item>
         <NavbarLink href="#">Contact Us</NavbarLink>
        </NavbarCollapse>
      </Navbar>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center h-screen text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Empowering Our Members Financially
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl mt-4 text-[#957E32]"
        >
          We offer a wide range of financial products and services to help you achieve your goals.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-6"
        >
          <Button className="bg-[#659A0F] text-[#CCD2D4] hover:bg-[#A37D3A] hover:text-[#9FCFA0] px-6 py-3 rounded-full text-lg">
            Get Started
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

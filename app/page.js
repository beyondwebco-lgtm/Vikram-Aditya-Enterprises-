import React from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Gallery from "../components/Gallery";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800 antialiased overflow-x-hidden">
      {/* Top Notification Bar */}
      <TopBar />

      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Us Section */}
      <AboutUs />

      {/* Our Services Section (All 9 exact services) */}
      <Services />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Real Project Gallery Section */}
      <Gallery />

      {/* Contact Us Section with Business Info, Google Map & Inquiry Form */}
      <ContactUs />

      {/* Professional Footer */}
      <Footer />

      {/* Global Floating WhatsApp Widget */}
      <FloatingWhatsApp />
    </main>
  );
}

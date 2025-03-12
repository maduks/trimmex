import React from 'react';
import {
  Leaf,
  Mail,
  MapPin,
  Phone,
  Heart,
  Coffee,
  Brain,
  Activity,
  Shield,
} from "lucide-react";
import Pricing from '../components/Pricing';
import Hero from 'components/Hero';
import Benefits from 'components/Benefits';
import Testimonials from 'components/Testimonials';
import Transformations from 'components/Transformations';
import Cta from 'components/Cta';
import Contact from 'components/Contact';
import Footer from 'components/Footer';

// Define the benefits array
const benefits = [
  {
    icon: <Leaf className="h-6 w-6" />,
    title: "Antioxidant Properties",
    description: "Rich in chlorogenic acids to reduce oxidative stress and fight free radicals.",
  },
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Weight Management",
    description: "Promotes fat burning and reduces body fat by boosting metabolism naturally.",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Mental Clarity",
    description: "Enhances focus and cognitive function for improved mental performance.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Heart Health",
    description: "Supports cardiovascular health and maintains healthy blood pressure levels.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Immune Support",
    description: "Strengthens the immune system with essential vitamins and minerals.",
  },
  {
    icon: <Coffee className="h-6 w-6" />,
    title: "Natural Energy",
    description: "Provides sustained energy without the crash of artificial stimulants.",
  }
];

const LandingPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <span className="font-bold">Trimmex</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#benefits">
            Benefits
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
       <Hero/>
       {/* Benefits Section */}
       <Benefits/>
       {/* Testimonials Section */}
       <Transformations />
        {/* Pricing Section */}
        <Pricing />
        {/* Testimonials Section */}
        <Testimonials/>
        {/* CTA Section */}
        <Cta/>
        {/* Contact Section */}
        <Contact/>
        {/* Footer Section */}
        <Footer/>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Trimmex. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6 ml-auto">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default LandingPage; 
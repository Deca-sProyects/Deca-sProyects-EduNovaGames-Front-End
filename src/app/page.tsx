import type { NextPage } from "next";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Research from "@/app/components/Research";
import AISection from "@/app/components/AISection";
import Services from "@/app/components/Services";
import Solutions from "@/app/components/Solutions";
import Blog from "@/app/components/Blog";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Research />
        <AISection />
        <Services />
        <Solutions />
        <Blog />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

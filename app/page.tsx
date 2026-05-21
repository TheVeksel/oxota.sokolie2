import { AboutSection } from "../components/home/AboutSection";
import { ContactSection } from "../components/home/ContactSection";
import { FeaturesSection } from "../components/home/FeaturesSection";
import { GallerySection } from "../components/home/GallerySection";
import { Header } from "../components/home/Header";
import { HeroSection } from "../components/home/HeroSection";
import { HuntTypesSection } from "../components/home/HuntTypesSection";
import { NewsSection } from "../components/home/NewsSection";
import { ServicesSection } from "../components/home/ServicesSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen overflow-x-hidden bg-[#050705] text-white selection:bg-[#b49b6a]/30 selection:text-white">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <HuntTypesSection />
        <ServicesSection />
        <GallerySection />
        <NewsSection />
        <ContactSection />
      </main>
    </>
  );
}

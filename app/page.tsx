import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      
      <Section id="about" title="About Me" className="bg-gray-50 dark:bg-gray-900">
        <AboutSection />
      </Section>
      
      <Section id="experience" title="Work Experience">
        <ExperienceSection />
      </Section>
      
      <Section id="projects" title="Projects" className="bg-gray-50 dark:bg-gray-900">
        <ProjectsSection />
      </Section>
      
      <Section id="contact" title="Contact">
        <ContactSection />
      </Section>
    </>
  );
}

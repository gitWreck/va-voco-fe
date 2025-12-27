import Hero from "@/components/Home";
import Features from "@/components/Features";
import About from "@/components/About";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <Services />
      <ContactForm />
    </main>
  );
}
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Phones from "./components/Phones";
import Repairs from "./components/Repairs";
import Community from "./components/Community";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import CallPill from "./components/CallPill";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Services />
      <Phones />
      <Repairs />
      <Community />
      <Visit />
      <Footer />
      <CallPill />
    </main>
  );
}

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Phones from "./components/Phones";
import Switch from "./components/Switch";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Services />
      <Phones />
      <Switch />
      <Visit />
      <Footer />
    </main>
  );
}

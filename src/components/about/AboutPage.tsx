import { About, Footer, Header } from "../../components";
import Partners from "./Partners";

const AboutPage = () => {
  const p1 =
    "Quantum leap sport is a dynamic sports agency dedicated to empowering athletes and brands in Nigeria. We offer a comprehensive range of services, including player placement via athletic scholarships to high schools and colleges in United States, Asia and Europe, player  representation, management, sales, consulting, and marketing, tailored to meet the unique needs of our clients.";

  const p2 =
    "With our deep understanding of the Nigerian, African and international sports landscape, we provide strategic guidance, expert contract negotiation, brand development, and innovative marketing solutions. Our team of passionate professionals is committed to building lasting legacies for our clients, both on and off the field.";

  const p3 =
    "Based in Nigeria and Canada, Quantum leap sport is your trusted partner for obtaining a scholarship and navigating the complexities of the sports industry as a player and as school/Team we help you meet your demand of obtaining athlete's. Let us help you achieve your goals and reach new heights.";
  return (
    <div>
      <Header btext="QL-Sport" size="text-[61px]" />
      <About header1="" header2="About us" p1={p1} p2={p2} p3={p3} p4="" />
      <Partners />
      <Footer />
    </div>
  );
};

export default AboutPage;

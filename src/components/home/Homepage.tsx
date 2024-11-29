import { About, Blog, Footer, Header, Services, Team } from "../../components";

const Homepage = () => {
  const p1 =
    "Quantum leap sports is a dynamic sports agency dedicated to empowering athletes and brands in Nigeria. We offer a comprehensive range of services, including player placement via athletic scholarships to high schools and colleges in United States, Asia and Europe, player  representation, management, sales, consulting, and marketing, tailored to meet the unique needs of our clients.";

  // const p2 =
  //   "Quantum leap sports focuses on helping businesses make money and improve their brand. We offer two main services: finding sponsors for properties and giving expert advice to brands.";

  const p3 =
    "Built on the four pillars of trust, integrity, experience and hard work, we serve clients in the sports and entertainment industry in order to help them achieve their marketing and sales goals. Quantum leap sport boasts extensive experience working with brands, teams, leagues, events, venues and governing bodies. The leadership team has deep experience in every major area of the industry including work in professional, collegiate, agency, consulting, domestic and international areas.";

  return (
    <div>
      <Header
        p="empowering Youths Through Basketball."
        h1="Your Gateway to Athletic Excellence."
        btext="Become a prospect"
        size=""
      />
      <About
        header1=""
        header2="Our philosophy"
        p1={p1}
        // p2={p2}
        p3={p3}
        p4="Empowerment,  Consulting. Partnership."
      />
      <Services />
      <Team />
      <Blog />
      <Footer />
    </div>
  );
};

export default Homepage;

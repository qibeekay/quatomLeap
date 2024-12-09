import React from "react";
import { ContactUsDetails, Footer, Header } from "../../components";

const ContactUsPage = () => {
  return (
    <div>
      <Header btext="Contact us" size="text-[61px]" />
      <ContactUsDetails />
      <Footer />
    </div>
  );
};

export default ContactUsPage;

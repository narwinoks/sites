import React from "react";
import Main from "../layouts/Main";
import ContactLink from "../features/contact/ContactLink";
import ContactUs from "../features/contact/ContactUs";
import Hr from "../components/hr";

const ContactPage = () => {
  return (
    <Main>
      <ContactLink></ContactLink>
      <Hr />
      <ContactUs></ContactUs>
    </Main>
  );
};

export default ContactPage;

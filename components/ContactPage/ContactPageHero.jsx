import React from "react";

const ContactPageHero = ({contactData}) => {
  return (
    <div className="contactPageHero">
      <h1>{contactData.page_name}</h1>
    </div>
  );
};

export default ContactPageHero;


import React from "react";

const ContactMap = () => {
  return (
    <div className="contactMap">
      <div className="container">
        <div className="contactMapItems">
          <div className="row">
            <div className="xl-6 lg-6 md-6 sm-12">
              <div className="contactMapItemsLeft">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1120.6018769616646!2d49.8325636162208!3d40.37619777816996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307de69fc9e033%3A0x414a5a4c82342759!2sNizami%20Mall!5e1!3m2!1str!2saz!4v1765309897779!5m2!1str!2saz"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nizami Mall Map"
                ></iframe>
              </div>
            </div>

            <div className="xl-6 lg-6 md-6 sm-12">
              <div className="contactMapItemsRight">
                <span>Send your inquiry </span>
                <form className="contactForm">
                  <div className="contactFormNamePhone">
                    <div className="floatingInput">
                      <input
                        type="text"
                        id="contactName"
                        name="name"
                        placeholder=""
                        required
                      />
                      <label htmlFor="contactName">Name Surname</label>
                    </div>
                    <div className="floatingInput">
                      <input
                        type="text"
                        id="contactName"
                        name="name"
                        placeholder=" "
                        required
                      />
                      <label htmlFor="contactName">Phone</label>
                    </div>
                  </div>
                  {/* Adınız */}

                  {/* Email */}
                  <div className="floatingInput">
                    <input
                      type="email"
                      id="contactEmail"
                      name="email"
                      placeholder=" "
                      required
                    />
                    <label htmlFor="contactEmail">Email</label>
                  </div>

                  {/* Mesaj */}
                  <div className="floatingInput">
                    <textarea
                      id="contactMessage"
                      name="message"
                      placeholder=" "
                      rows={4}
                      required
                    />
                    <label htmlFor="contactMessage">Mesajınız</label>
                  </div>

                  <button type="submit" className="contactFormButton">
                    Send your message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;

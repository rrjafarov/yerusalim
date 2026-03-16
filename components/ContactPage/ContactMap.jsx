import React from "react";

const ContactMap = ({ contactData, t }) => {
  return (
    <div className="contactMap">
      <div className="container">
        <div className="contactMapItems">
          <div className="row">
            <div className="xl-6 lg-6 md-6 sm-12">
              <div className="contactMapItemsLeft">
                <iframe
                  src={contactData.location}
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
                <span>{t?.sendYourInquiry}</span>
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
                      <label htmlFor="contactName">{t?.namesurname}</label>
                    </div>
                    <div className="floatingInput">
                      <input
                        type="text"
                        id="contactName"
                        name="name"
                        placeholder=" "
                        required
                      />
                      <label htmlFor="contactName">{t?.phone}</label>
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
                    <label htmlFor="contactEmail">{t?.email}</label>
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
                    <label htmlFor="contactMessage">{t?.yourMessage}</label>
                  </div>

                  <button type="submit" className="contactFormButton">
                    {t?.sendButton}
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

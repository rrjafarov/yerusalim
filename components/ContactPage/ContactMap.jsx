// "use client";
// import React, { useState } from "react";

// const ContactMap = ({ contactData, t }) => {
//   const [phone, setPhone] = useState("");
//   const [phoneTouched, setPhoneTouched] = useState(false);
//   const [errors, setErrors] = useState({});

//   const validateForm = (form) => {
//     const newErrors = {};
//     if (!form.name.value.trim()) newErrors.name = t?.formValidationName;
//     if (!phone.trim() || phone === "+994 ") newErrors.phone = t?.formValidationPhone;
//     if (!form.email.value.trim()) newErrors.email = t?.formValidationEmail;
//     if (!form.message.value.trim()) newErrors.message = t?.formValidationTextarea;
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const clearError = (field) => {
//     setErrors((prev) => {
//       const newErrors = { ...prev };
//       delete newErrors[field];
//       return newErrors;
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateForm(e.target)) return;
//   };

//   return (
//     <div className="contactMap">
//       <div className="container">
//         <div className="contactMapItems">
//           <div className="row">
//             <div className="xl-6 lg-6 md-6 sm-12">
//               <div className="contactMapItemsLeft">
//                 <iframe
//                   src={contactData.location}
//                   width="600"
//                   height="450"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   title="Nizami Mall Map"
//                 ></iframe>
//               </div>
//             </div>

//             <div className="xl-6 lg-6 md-6 sm-12">
//               <div className="contactMapItemsRight">
//                 <span>{t?.sendYourInquiry}</span>
//                 <form className="contactForm" onSubmit={handleSubmit}>
//                   <div className="contactFormNamePhone">

//                     <div className="contactFormGroup">
//                       {errors.name && <div className="validationMessage">{errors.name}</div>}
//                       <div className={`floatingInput ${errors.name ? "inputError" : ""}`}>
//                         <input
//                           type="text"
//                           id="contactName"
//                           name="name"
//                           placeholder=" "
//                           onFocus={() => clearError("name")}
//                         />
//                         <label htmlFor="contactName">{t?.namesurname}</label>
//                       </div>
//                     </div>

//                     <div className="contactFormGroup">
//                       {errors.phone && <div className="validationMessage">{errors.phone}</div>}
//                       <div className={`floatingInput ${errors.phone ? "inputError" : ""} ${phone || phoneTouched ? "floating" : ""}`}>
//                         <input
//                           type="tel"
//                           name="phone"
//                           placeholder=" "
//                           value={phone}
//                           onChange={(e) => setPhone(e.target.value)}
//                           onFocus={() => {
//                             setPhoneTouched(true);
//                             if (!phone) setPhone("+994 ");
//                             clearError("phone");
//                           }}
//                           onBlur={() => {
//                             if (phone === "+994 ") {
//                               setPhone("");
//                               setPhoneTouched(false);
//                             }
//                           }}
//                         />
//                         <label>{t?.phone}</label>
//                       </div>
//                     </div>

//                   </div>

//                   <div className="contactFormGroup">
//                     {errors.email && <div className="validationMessage">{errors.email}</div>}
//                     <div className={`floatingInput ${errors.email ? "inputError" : ""}`}>
//                       <input
//                         type="email"
//                         id="contactEmail"
//                         name="email"
//                         placeholder=" "
//                         onFocus={() => clearError("email")}
//                       />
//                       <label htmlFor="contactEmail">{t?.email}</label>
//                     </div>
//                   </div>

//                   <div className="contactFormGroup">
//                     {errors.message && <div className="validationMessage">{errors.message}</div>}
//                     <div className={`floatingInput ${errors.message ? "inputError" : ""}`}>
//                       <textarea
//                         id="contactMessage"
//                         name="message"
//                         placeholder=" "
//                         rows={4}
//                         onFocus={() => clearError("message")}
//                       />
//                       <label htmlFor="contactMessage">{t?.yourMessage}</label>
//                     </div>
//                   </div>

//                   <button type="submit" className="contactFormButton">
//                     {t?.sendButton}
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactMap;












































"use client";
import React, { useState } from "react";

const ContactMap = ({ contactData, t }) => {
  const [phone, setPhone] = useState("");
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); 
  // idle | loading | success | error

  const validateForm = (form) => {
    const newErrors = {};

    if (!form.name.value.trim()) newErrors.name = t?.formValidationName;
    if (!phone.trim() || phone === "+994 ") newErrors.phone = t?.formValidationPhone;
    if (!form.email.value.trim()) newErrors.email = t?.formValidationEmail;
    if (!form.message.value.trim()) newErrors.message = t?.formValidationTextarea;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearError = (field) => {
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[field];
      return copy;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm(e.target)) return;

    const form = e.target;

    try {
      setStatus("loading");

      const formData = new FormData();

      formData.append("key", "contact-form");
      formData.append("title", form.name.value.trim());
      formData.append(
        "form_data",
        JSON.stringify({
          message: form.message.value.trim(),
          phone: phone.replace("+", "").replace(/\s/g, ""),
          email: form.email.value.trim(),
        })
      );

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/form-data/send`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");

      // reset form
      form.reset();
      setPhone("");
      setPhoneTouched(false);
      setErrors({});

      // 3 saniyə sonra button geri idle olsun
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      console.error(err);
      setStatus("error");

      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const buttonText =
    status === "loading"
      ? t?.sendingLoad
      : status === "success"
      ? t?.sendSuccess
      : status === "error"
      ? t?.sendError
      : t?.sendButton;

  return (
    <div className="contactMap">
      <div className="container">
        <div className="contactMapItems">
          <div className="row">
            {/* MAP */}
            <div className="xl-6 lg-6 md-6 sm-12">
              <div className="contactMapItemsLeft">
                <iframe
                  src={contactData.location}
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Map"
                />
              </div>
            </div>

            {/* FORM */}
            <div className="xl-6 lg-6 md-6 sm-12">
              <div className="contactMapItemsRight">
                <span>{t?.sendYourInquiry}</span>

                <form className="contactForm" onSubmit={handleSubmit}>
                  
                  {/* NAME + PHONE */}
                  <div className="contactFormNamePhone">
                    
                    {/* NAME */}
                    <div className="contactFormGroup">
                      {errors.name && (
                        <div className="validationMessage">{errors.name}</div>
                      )}

                      <div className={`floatingInput ${errors.name ? "inputError" : ""}`}>
                        <input
                          name="name"
                          type="text"
                          placeholder=" "
                          onFocus={() => clearError("name")}
                        />
                        <label>{t?.namesurname}</label>
                      </div>
                    </div>

                    {/* PHONE */}
                    <div className="contactFormGroup">
                      {errors.phone && (
                        <div className="validationMessage">{errors.phone}</div>
                      )}

                      <div
                        className={`floatingInput ${
                          errors.phone ? "inputError" : ""
                        } ${phone || phoneTouched ? "floating" : ""}`}
                      >
                        <input
                          name="phone"
                          type="tel"
                          value={phone}
                          placeholder=" "
                          onChange={(e) => setPhone(e.target.value)}
                          onFocus={() => {
                            setPhoneTouched(true);
                            if (!phone) setPhone("+994 ");
                            clearError("phone");
                          }}
                          onBlur={() => {
                            if (phone === "+994 ") {
                              setPhone("");
                              setPhoneTouched(false);
                            }
                          }}
                        />
                        <label>{t?.phone}</label>
                      </div>
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="contactFormGroup">
                    {errors.email && (
                      <div className="validationMessage">{errors.email}</div>
                    )}

                    <div className={`floatingInput ${errors.email ? "inputError" : ""}`}>
                      <input
                        name="email"
                        type="email"
                        placeholder=" "
                        onFocus={() => clearError("email")}
                      />
                      <label>{t?.email}</label>
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div className="contactFormGroup">
                    {errors.message && (
                      <div className="validationMessage">{errors.message}</div>
                    )}

                    <div className={`floatingInput ${errors.message ? "inputError" : ""}`}>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder=" "
                        onFocus={() => clearError("message")}
                      />
                      <label>{t?.yourMessage}</label>
                    </div>
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    className="contactFormButton"
                    disabled={status === "loading"}
                  >
                    {buttonText}
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
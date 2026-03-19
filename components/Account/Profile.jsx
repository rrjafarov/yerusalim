// "use client";
// import { useGetUserInfoQuery } from "@/redux/userService";
// import React, { useRef, useState, useEffect } from "react";

// const Profile = ({ t }) => {
//   const [editableField, setEditableField] = useState(null);
//   const { data: user, isLoading, isError } = useGetUserInfoQuery();

//   const fullNameRef = useRef(null);
//   const emailRef = useRef(null);
//   const phoneRef = useRef(null);

//   const handleEditClick = (field) => {
//     setEditableField(field);
//   };

//   useEffect(() => {
//     if (editableField === "fullName" && fullNameRef.current) {
//       const input = fullNameRef.current;
//       const length = input.value.length;
//       input.focus();
//       input.setSelectionRange(length, length);
//     }

//     if (editableField === "email" && emailRef.current) {
//       const input = emailRef.current;
//       input.focus();
//       // Email input üçün setSelectionRange işləmir, sadəcə fokus edirik
//     }

//     if (editableField === "phone" && phoneRef.current) {
//       const input = phoneRef.current;
//       const length = input.value.length;
//       input.focus();
//       input.setSelectionRange(length, length);
//     }
//   }, [editableField]);

//   return (
//     <div className="profilePage">
//       <div className="profilePageItems">
//         <span className="profilePageTitle">{t?.accountDetails}</span>

//         <form className="profileForm" action="">
//           {/* Full name */}
//           <div className="profileField">
//             <span className="profileFieldLabel">{t?.namesurname}</span>
//             <input
//               ref={fullNameRef}
//               type="text"
//               defaultValue="Your full name"
//               disabled={editableField !== "fullName"}
//             />
//             <button
//               type="button"
//               className="profileEditBtn"
//               aria-label="Edit full name"
//               onClick={() => handleEditClick("fullName")}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="17"
//                 height="17"
//                 viewBox="0 0 17 17"
//                 fill="none"
//               >
//                 <path
//                   d="M11.4385 2.68652C12.1813 2.01129 13.3156 2.01145 14.0586 2.68652C14.0951 2.71974 14.1348 2.75879 14.1865 2.81055C14.2383 2.86237 14.2783 2.90194 14.3115 2.93848C14.9868 3.68142 14.9868 4.81662 14.3115 5.55957C14.2782 5.59618 14.2385 5.63556 14.1865 5.6875L13.4824 6.3916C13.4729 6.40133 13.4634 6.41093 13.4531 6.41992L7.15039 12.7236C6.61919 13.2548 6.28719 13.5937 5.875 13.8271C5.4626 14.0606 5.00077 14.1712 4.27148 14.3535L2.96094 14.6807C2.77994 14.7259 2.58797 14.6729 2.45605 14.541C2.32461 14.4092 2.27135 14.2178 2.31641 14.0371L2.64453 12.7266C2.82682 11.9974 2.93742 11.5354 3.1709 11.123C3.4044 10.7107 3.74294 10.3781 4.27441 9.84668L11.3105 2.81055C11.3624 2.75866 11.4019 2.7198 11.4385 2.68652ZM5.02637 10.5986C4.45518 11.1698 4.24172 11.3887 4.0957 11.6465C3.9497 11.9044 3.87077 12.2005 3.6748 12.9844L3.56152 13.4346L4.01367 13.3223C4.79725 13.1264 5.0928 13.0482 5.35059 12.9023C5.60848 12.7563 5.82796 12.5431 6.39941 11.9717L11.9629 6.40723C11.3362 6.16162 10.8351 5.65959 10.5908 5.03223L5.02637 10.5986ZM13.3447 3.47266C13.007 3.16593 12.4909 3.16579 12.1533 3.47266C12.1401 3.48469 12.1221 3.50196 12.0615 3.5625L11.4912 4.13184C11.4727 4.89437 12.1012 5.52271 12.8633 5.50684L13.4355 4.93555C13.496 4.87511 13.5134 4.85795 13.5254 4.84473C13.8323 4.50702 13.8323 3.99101 13.5254 3.65332C13.5134 3.64013 13.4956 3.62255 13.4355 3.5625C13.3756 3.50254 13.3579 3.48466 13.3447 3.47266Z"
//                   fill="#22282F"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* E-mail */}
//           <div className="profileField">
//             <span className="profileFieldLabel">{t?.email}</span>
//             <input
//               ref={emailRef}
//               type="email"
//               defaultValue="example@mail.com"
//               disabled={editableField !== "email"}
//             />
//             <button
//               type="button"
//               className="profileEditBtn"
//               aria-label="Edit email"
//               onClick={() => handleEditClick("email")}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="17"
//                 height="17"
//                 viewBox="0 0 17 17"
//                 fill="none"
//               >
//                 <path
//                   d="M11.4385 2.68652C12.1813 2.01129 13.3156 2.01145 14.0586 2.68652C14.0951 2.71974 14.1348 2.75879 14.1865 2.81055C14.2383 2.86237 14.2783 2.90194 14.3115 2.93848C14.9868 3.68142 14.9868 4.81662 14.3115 5.55957C14.2782 5.59618 14.2385 5.63556 14.1865 5.6875L13.4824 6.3916C13.4729 6.40133 13.4634 6.41093 13.4531 6.41992L7.15039 12.7236C6.61919 13.2548 6.28719 13.5937 5.875 13.8271C5.4626 14.0606 5.00077 14.1712 4.27148 14.3535L2.96094 14.6807C2.77994 14.7259 2.58797 14.6729 2.45605 14.541C2.32461 14.4092 2.27135 14.2178 2.31641 14.0371L2.64453 12.7266C2.82682 11.9974 2.93742 11.5354 3.1709 11.123C3.4044 10.7107 3.74294 10.3781 4.27441 9.84668L11.3105 2.81055C11.3624 2.75866 11.4019 2.7198 11.4385 2.68652ZM5.02637 10.5986C4.45518 11.1698 4.24172 11.3887 4.0957 11.6465C3.9497 11.9044 3.87077 12.2005 3.6748 12.9844L3.56152 13.4346L4.01367 13.3223C4.79725 13.1264 5.0928 13.0482 5.35059 12.9023C5.60848 12.7563 5.82796 12.5431 6.39941 11.9717L11.9629 6.40723C11.3362 6.16162 10.8351 5.65959 10.5908 5.03223L5.02637 10.5986ZM13.3447 3.47266C13.007 3.16593 12.4909 3.16579 12.1533 3.47266C12.1401 3.48469 12.1221 3.50196 12.0615 3.5625L11.4912 4.13184C11.4727 4.89437 12.1012 5.52271 12.8633 5.50684L13.4355 4.93555C13.496 4.87511 13.5134 4.85795 13.5254 4.84473C13.8323 4.50702 13.8323 3.99101 13.5254 3.65332C13.5134 3.64013 13.4956 3.62255 13.4355 3.5625C13.3756 3.50254 13.3579 3.48466 13.3447 3.47266Z"
//                   fill="#22282F"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Phone */}
//           <div className="profileField">
//             <span className="profileFieldLabel">{t?.phone}</span>
//             <input
//               ref={phoneRef}
//               type="text"
//               defaultValue="+994 00 000 00 00"
//               disabled={editableField !== "phone"}
//             />
//             <button
//               type="button"
//               className="profileEditBtn"
//               aria-label="Edit phone"
//               onClick={() => handleEditClick("phone")}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="17"
//                 height="17"
//                 viewBox="0 0 17 17"
//                 fill="none"
//               >
//                 <path
//                   d="M11.4385 2.68652C12.1813 2.01129 13.3156 2.01145 14.0586 2.68652C14.0951 2.71974 14.1348 2.75879 14.1865 2.81055C14.2383 2.86237 14.2783 2.90194 14.3115 2.93848C14.9868 3.68142 14.9868 4.81662 14.3115 5.55957C14.2782 5.59618 14.2385 5.63556 14.1865 5.6875L13.4824 6.3916C13.4729 6.40133 13.4634 6.41093 13.4531 6.41992L7.15039 12.7236C6.61919 13.2548 6.28719 13.5937 5.875 13.8271C5.4626 14.0606 5.00077 14.1712 4.27148 14.3535L2.96094 14.6807C2.77994 14.7259 2.58797 14.6729 2.45605 14.541C2.32461 14.4092 2.27135 14.2178 2.31641 14.0371L2.64453 12.7266C2.82682 11.9974 2.93742 11.5354 3.1709 11.123C3.4044 10.7107 3.74294 10.3781 4.27441 9.84668L11.3105 2.81055C11.3624 2.75866 11.4019 2.7198 11.4385 2.68652ZM5.02637 10.5986C4.45518 11.1698 4.24172 11.3887 4.0957 11.6465C3.9497 11.9044 3.87077 12.2005 3.6748 12.9844L3.56152 13.4346L4.01367 13.3223C4.79725 13.1264 5.0928 13.0482 5.35059 12.9023C5.60848 12.7563 5.82796 12.5431 6.39941 11.9717L11.9629 6.40723C11.3362 6.16162 10.8351 5.65959 10.5908 5.03223L5.02637 10.5986ZM13.3447 3.47266C13.007 3.16593 12.4909 3.16579 12.1533 3.47266C12.1401 3.48469 12.1221 3.50196 12.0615 3.5625L11.4912 4.13184C11.4727 4.89437 12.1012 5.52271 12.8633 5.50684L13.4355 4.93555C13.496 4.87511 13.5134 4.85795 13.5254 4.84473C13.8323 4.50702 13.8323 3.99101 13.5254 3.65332C13.5134 3.64013 13.4956 3.62255 13.4355 3.5625C13.3756 3.50254 13.3579 3.48466 13.3447 3.47266Z"
//                   fill="#22282F"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Save button */}
//           <button type="button" className="profileSaveBtn">
//             {t?.accountSaveButton}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Profile;











// !    editted profilee

"use client";
import { useGetUserInfoQuery, useUpdateUserInfoMutation } from "@/redux/userService";
import React, { useRef, useState, useEffect } from "react";

const EditSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
    <path
      d="M11.4385 2.68652C12.1813 2.01129 13.3156 2.01145 14.0586 2.68652C14.0951 2.71974 14.1348 2.75879 14.1865 2.81055C14.2383 2.86237 14.2783 2.90194 14.3115 2.93848C14.9868 3.68142 14.9868 4.81662 14.3115 5.55957C14.2782 5.59618 14.2385 5.63556 14.1865 5.6875L13.4824 6.3916C13.4729 6.40133 13.4634 6.41093 13.4531 6.41992L7.15039 12.7236C6.61919 13.2548 6.28719 13.5937 5.875 13.8271C5.4626 14.0606 5.00077 14.1712 4.27148 14.3535L2.96094 14.6807C2.77994 14.7259 2.58797 14.6729 2.45605 14.541C2.32461 14.4092 2.27135 14.2178 2.31641 14.0371L2.64453 12.7266C2.82682 11.9974 2.93742 11.5354 3.1709 11.123C3.4044 10.7107 3.74294 10.3781 4.27441 9.84668L11.3105 2.81055C11.3624 2.75866 11.4019 2.7198 11.4385 2.68652ZM5.02637 10.5986C4.45518 11.1698 4.24172 11.3887 4.0957 11.6465C3.9497 11.9044 3.87077 12.2005 3.6748 12.9844L3.56152 13.4346L4.01367 13.3223C4.79725 13.1264 5.0928 13.0482 5.35059 12.9023C5.60848 12.7563 5.82796 12.5431 6.39941 11.9717L11.9629 6.40723C11.3362 6.16162 10.8351 5.65959 10.5908 5.03223L5.02637 10.5986ZM13.3447 3.47266C13.007 3.16593 12.4909 3.16579 12.1533 3.47266C12.1401 3.48469 12.1221 3.50196 12.0615 3.5625L11.4912 4.13184C11.4727 4.89437 12.1012 5.52271 12.8633 5.50684L13.4355 4.93555C13.496 4.87511 13.5134 4.85795 13.5254 4.84473C13.8323 4.50702 13.8323 3.99101 13.5254 3.65332C13.5134 3.64013 13.4956 3.62255 13.4355 3.5625C13.3756 3.50254 13.3579 3.48466 13.3447 3.47266Z"
      fill="#22282F"
    />
  </svg>
);

const Profile = ({ t }) => {
  const { data: user, isLoading } = useGetUserInfoQuery();
  const [updateUserInfo, { isLoading: isUpdating }] = useUpdateUserInfoMutation();

  const [editableField, setEditableField] = useState(null);
  const [formData, setFormData] = useState({
    name_surname: "",
    email: "",
    phone: "",
  });

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  // user datası gəldikdə formData-nı doldur
  useEffect(() => {
    if (user) {
      setFormData({
        name_surname: user.name_surname || "",
        email: user.email || "",
        phone: user.phone || "",
      });
    }
  }, [user]);

  // Edit buttonuna klick etdikdə həmin inputu fokusla
  useEffect(() => {
    if (editableField === "name_surname" && fullNameRef.current) {
      const input = fullNameRef.current;
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
    if (editableField === "email" && emailRef.current) {
      emailRef.current.focus();
    }
    if (editableField === "phone" && phoneRef.current) {
      const input = phoneRef.current;
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
  }, [editableField]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    try {
      await updateUserInfo(formData).unwrap();
      setEditableField(null);
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  if (isLoading) return null;

  return (
    <div className="profilePage">
      <div className="profilePageItems">
        <span className="profilePageTitle">{t?.accountDetails}</span>

        <form className="profileForm" onSubmit={(e) => e.preventDefault()}>
          {/* Full name */}
          <div className="profileField">
            <span className="profileFieldLabel">{t?.namesurname}</span>
            <input
              ref={fullNameRef}
              type="text"
              value={formData.name_surname}
              onChange={(e) => handleChange("name_surname", e.target.value)}
              disabled={editableField !== "name_surname"}
            />
            <button
              type="button"
              className="profileEditBtn"
              aria-label="Edit full name"
              onClick={() => setEditableField("name_surname")}
            >
              <EditSVG />
            </button>
          </div>

          {/* E-mail */}
          <div className="profileField">
            <span className="profileFieldLabel">{t?.email}</span>
            <input
              ref={emailRef}
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              disabled={editableField !== "email"}
            />
            <button
              type="button"
              className="profileEditBtn"
              aria-label="Edit email"
              onClick={() => setEditableField("email")}
            >
              <EditSVG />
            </button>
          </div>

          {/* Phone */}
          <div className="profileField">
            <span className="profileFieldLabel">{t?.phone}</span>
            <input
              ref={phoneRef}
              type="text"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              disabled={editableField !== "phone"}
            />
            <button
              type="button"
              className="profileEditBtn"
              aria-label="Edit phone"
              onClick={() => setEditableField("phone")}
            >
              <EditSVG />
            </button>
          </div>

          {/* Save button */}
          <button
            type="button"
            className="profileSaveBtn"
            onClick={handleSave}
            disabled={isUpdating}
          >
            {isUpdating ? t?.saving : t?.accountSaveButton}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
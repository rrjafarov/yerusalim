// import Link from "next/link";
// import React from "react";

// const GuestUserForm = () => {
//   return (
//     <div className="guestUserForm">
//       <div className="guestUserFormTopLink">
//         <span>Please fill infos</span>
//         <p>
//           Do you have an account ? <Link href="#">Login now</Link>
//         </p>
//       </div>
//       <div className="guestUserFormSector">
//         <div className="guestUserFormSectorItem">
//             <>Inputlar bu hissede olmalidir</>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GuestUserForm;








import Link from "next/link";
import React from "react";

const GuestUserForm = () => {
  return (
    <div className="guestUserForm">
      <div className="guestUserFormTopLink">
        <span>Please fill infos</span>
        <p>
          Do you have an account ? <Link href="#">Login now</Link>
        </p>
      </div>
      <div className="guestUserFormSector">
        <div className="guestUserFormSectorItem">
          <form className="guestUserFormForm">
            <div className="guestUserFormRow">
              <div className="floatingInput">
                <input
                  type="text"
                  id="guestFullName"
                  name="fullName"
                  placeholder=" "
                  required
                />
                <label htmlFor="guestFullName">Full name</label>
              </div>

              <div className="floatingInput">
                <input
                  type="text"
                  id="guestPhone"
                  name="phone"
                  placeholder=" "
                  required
                />
                <label htmlFor="guestPhone">Phone</label>
              </div>
            </div>

            <div className="guestUserFormRow">
              <div className="floatingInput">
                <input
                  type="text"
                  id="guestCity"
                  name="city"
                  placeholder=" "
                  required
                />
                <label htmlFor="guestCity">City</label>
              </div>

              <div className="floatingInput">
                <input
                  type="text"
                  id="guestAddress"
                  name="address"
                  placeholder=" "
                  required
                />
                <label htmlFor="guestAddress">Address</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GuestUserForm;

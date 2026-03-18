import Link from "next/link";
import React from "react";

const GuestUserForm = ({t}) => {
  return (
    <div className="guestUserForm">
      <div className="guestUserFormTopLink">
        <span>{t?.basketFillForm}</span>
        <p>
          {t?.haveAccount} <Link href="#">{t?.loginNow}</Link>
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
                <label htmlFor="guestFullName">{t?.namesurname}</label>
              </div>

              <div className="floatingInput">
                <input
                  type="text"
                  id="guestPhone"
                  name="phone"
                  placeholder=" "
                  required
                />
                <label htmlFor="guestPhone">{t?.phone}</label>
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
                <label htmlFor="guestCity">{t?.city}</label>
              </div>

              <div className="floatingInput">
                <input
                  type="text"
                  id="guestAddress"
                  name="address"
                  placeholder=" "
                  required
                />
                <label htmlFor="guestAddress">{t?.address}</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GuestUserForm;

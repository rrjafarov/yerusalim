import Link from "next/link";
import React, { useState } from "react";

const GuestUserForm = ({ delveryRegions, t, onRegionSelect }) => {
  const [formData, setFormData] = useState({
    region: "",
    region_id: "",
  });

  return (
    <div className="guestUserForm">
      <div className="guestUserFormTopLink">
        <span>{t?.basketFillForm}</span>
        <p>
          {t?.haveAccount} <Link href="/login">{t?.loginNow}</Link>
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
              <div className="floatingInput floatingSelect">
                <select
                  id="guestCity"
                  name="city"
                  value={String(formData.region_id)}
                  required
                  onChange={(e) => {
                    const selected = delveryRegions?.find(
                      (r) => String(r.id) === e.target.value,
                    );
                    setFormData({
                      ...formData,
                      region: selected?.region_name || "",
                      region_id: selected?.id || "",
                    });
                    onRegionSelect && onRegionSelect(selected);
                  }}
                >
                  <option value="" disabled>
                    ...
                  </option>
                  {delveryRegions?.map((region) => (
                    <option key={region.id} value={String(region.id)}>
                      {region.region_name}
                    </option>
                  ))}
                </select>

                <label htmlFor="guestCity">{t?.city}</label>

                <span className="selectArrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                  >
                    <path
                      d="M3.06141 5.93994L7.95141 10.2866C8.52891 10.7999 9.47391 10.7999 10.0514 10.2866L14.9414 5.93994"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
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

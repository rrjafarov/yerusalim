import { useState, useEffect } from "react";
import {
  useAddAddressMutation,
  useUpdateAddressMutation,
} from "@/redux/userService";

const AddAddressPopup = ({
  delveryRegions,
  onClose,
  t,
  editingAddress,
  onRegionSelect,
}) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  const handleCloseClick = () => {
    if (onClose) {
      onClose();
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    region: "",
    region_id: "",
    tel: "",
  });

  const [addAddress] = useAddAddressMutation();
  const [updateAddress] = useUpdateAddressMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingAddress) {
        await updateAddress({
          id: editingAddress.id,
          data: formData,
        }).unwrap();
      } else {
        await addAddress(formData).unwrap();
      }

      onClose();

      setFormData({
        name: "",
        address: "",
        region: "",
        region_id: "",
        tel: "",
      });
    } catch (err) {
      console.log("Address error:", err);
    }
  };

  useEffect(() => {
    if (editingAddress) {
      setFormData({
        name: editingAddress.name || "",
        address: editingAddress.address || "",
        region: editingAddress.region || "",
        region_id: editingAddress.region_id || "",
        tel: editingAddress.tel || "",
      });
    } else {
      setFormData({
        name: "",
        address: "",
        region: "",
        region_id: "",
        tel: "",
      });
    }
  }, [editingAddress]);

  return (
    <div className="addAddressOverlay" onClick={handleOverlayClick}>
      <div className="addAddressPopup">
        <div className="addAddressPopupItems">
          <div className="newAddressPopupCloseIcon" onClick={handleCloseClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <g opacity="0.5">
                <path
                  d="M13.1465 4.14648C13.3417 3.95122 13.6583 3.95122 13.8535 4.14648C14.0487 4.34175 14.0488 4.65827 13.8535 4.85352L9.70703 9L13.8535 13.1465C14.0487 13.3417 14.0488 13.6583 13.8535 13.8535C13.6583 14.0488 13.3417 14.0487 13.1465 13.8535L9 9.70703L4.85352 13.8535C4.65827 14.0488 4.34175 14.0487 4.14648 13.8535C3.95122 13.6583 3.95122 13.3417 4.14648 13.1465L8.29297 9L4.14648 4.85352C3.95122 4.65825 3.95122 4.34175 4.14648 4.14648C4.34175 3.95122 4.65825 3.95122 4.85352 4.14648L9 8.29297L13.1465 4.14648Z"
                  fill="#22282F"
                />
              </g>
            </svg>
          </div>

          <div className="addAddressPopupItemsForm">
            <span className="addAddressPopupTitle">
              {editingAddress ? t?.editAddress : t?.addNewAddress}
            </span>

            <form className="addAddressPopupForm" onSubmit={handleSubmit}>
              {/* NAME */}
              <div className="floatingInput">
                <input
                  type="text"
                  id="addressName"
                  name="addressName"
                  placeholder=" "
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  value={formData.name}
                />
                <label htmlFor="addressName">{t?.namesurname}</label>
              </div>

              {/* ADDRESS */}
              <div className="floatingInput">
                <input
                  type="text"
                  id="addressLine"
                  name="addressLine"
                  placeholder=" "
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  value={formData.address}
                />
                <label htmlFor="addressLine">{t?.address}</label>
              </div>

              {/* CITY */}
              <div className="floatingInput floatingSelect">
                <select
                  id="city"
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
                    //  CART-A gonderirem 
                    if (onRegionSelect && selected) {
                      onRegionSelect(selected);
                    }
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

                <label htmlFor="city">{t?.city}</label>

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

              {/* PHONE */}
              <div className="floatingInput">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder=" "
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, tel: e.target.value })
                  }
                  value={formData.tel}
                />
                <label htmlFor="phone">{t?.phone}</label>
              </div>

              {/* BUTTON */}
              <button type="submit" className="addAddressPopupButton">
                {t?.save}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAddressPopup;

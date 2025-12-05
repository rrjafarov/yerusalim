import Link from "next/link";
import React from "react";

const HeaderTop = () => {
  return (
    <div>
      <div className="headerTop">
        <div className="container">
          <div className="headerTopItem">
            <Link href="#">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.5303 18.5303C14.2374 18.8232 13.7627 18.8232 13.4698 18.5303L7.46978 12.5303C7.17689 12.2374 7.17689 11.7627 7.46978 11.4698L13.4698 5.46978C13.7627 5.17689 14.2374 5.17689 14.5303 5.46978C14.8232 5.76268 14.8232 6.23744 14.5303 6.53033L9.06061 12.0001L14.5303 17.4698C14.8232 17.7627 14.8232 18.2374 14.5303 18.5303Z"
                    fill="white"
                  />
                </svg>
              </span>
              <p>Buy new products under the 24% Sale * <strong>Shop now</strong> </p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.46967 5.46967C9.76256 5.17678 10.2373 5.17678 10.5302 5.46967L16.5302 11.4697C16.8231 11.7626 16.8231 12.2373 16.5302 12.5302L10.5302 18.5302C10.2373 18.8231 9.76256 18.8231 9.46967 18.5302C9.17678 18.2373 9.17678 17.7626 9.46967 17.4697L14.9394 11.9999L9.46967 6.53022C9.17678 6.23732 9.17678 5.76256 9.46967 5.46967Z"
                    fill="white"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;

import { IoMdHome, IoMdSearch } from "react-icons/io";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { HiKey, HiChevronRight } from "react-icons/hi";
import { ImMap2 } from "react-icons/im";
import { GrStar } from "react-icons/gr";
import { ImLocation, ImBookmark } from "react-icons/im";
import { SiGooglechat } from "react-icons/si";
import { Link } from "react-router-dom";
import React from "react";
import "../styles/Base-notification.scss";
import "../styles/Layout-notification.scss";
import "../styles/Components-notification.scss";

const Notification = () => {
  return (
    <div>
      <div className="container container-1">
        <div className="notification">
          <SiGooglechat
            style={{
              height: "22px",
              width: "22px",
              cursor: "pointer",
              // paddingRight: "5px",
            }}
            color="#fff"
          />
          <span className="notification__number">1</span>
          <p className="notification__text">
            <span>&#187;</span> Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Culpa aperiam minus doloremque delectus?
          </p>
        </div>
      </div>

      <button className="btn-inline btn-bottom">
        Show all <span>&rarr;</span>
      </button>
    </div>
  );
};

export default Notification;

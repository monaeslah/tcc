import React, { useRef } from "react";
import "./style.scss";
import { useDetectOutsideClick } from "./useDetectOutsideClick";




export default function Button() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="container">
      <div className="menu-container">
        <div onClick={onClick} className={`menu-trigger ${isActive ? "outline" : ""}`}>
          <span>سمت/عنوان</span>
      
        </div>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li    onClick={onClick} className={` ${isActive ? "active" : "inactive"}`}>
              تست 1
            </li>
            <li  className={` ${isActive ? "active" : "inactive"}`}>
              تست 2
            </li>
            <li  className={` ${isActive ? "active" : "inactive"}`}>
              تست3
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

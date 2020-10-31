import React, { useRef,useState } from "react";
import "./style.scss";
import { useDetectOutsideClick } from "./useDetectOutsideClick";




export default function Button() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const [isSelect, setIsSelect] = useState( false);
  const [isSelect1, setIsSelect1 ] = useState( false);
  const [isSelect2, setIsSelect2] = useState( false);
  const onClick = () => setIsActive(!isActive);
  // eslint-disable-next-line no-unused-expressions
  const onSelect = () =>{ setIsSelect(true),setIsSelect1(false),setIsSelect2(false)}
  // eslint-disable-next-line no-unused-expressions
  const onSelect1 = () => { setIsSelect(false),setIsSelect1(true),setIsSelect2(false)}
  // eslint-disable-next-line no-unused-expressions
  const onSelect2 = () =>{ setIsSelect(false),setIsSelect1(false),setIsSelect2(true)}

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
            <li    onClick={onSelect} className={` ${isSelect ? "select" : "inselect"}`}>
              تست 1
            </li>
            <li  onClick={onSelect1} className={` ${isSelect1 ? "select" : "inselect"}`}>
              تست 2
            </li>
            <li  onClick={onSelect2} className={` ${isSelect2 ? "select" : "inselect"}`}>
              تست3
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

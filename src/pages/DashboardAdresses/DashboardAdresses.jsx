import React from "react";
import "./DashboardAdresses.css";
import { Link } from "react-router-dom";
function DashboardAdresses() {
  return (
    <>
      <div className="adress">
        <h3>آدرس‌ها</h3>
        <div className="empty-adress">
          <img src="/src/assets/address.svg" alt="" />
          <p>هنوز آدرس ثبت نکرده‌اید.</p>
          <Link><i className="fas fa-location"></i>ثبت آدرس</Link>
        </div>
      </div>
    </>
  );
}

export default DashboardAdresses;

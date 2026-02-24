import React from "react";
import "./DashboardComments.css";
import { NavLink } from "react-router-dom";
function DashboardComments() {
  return (
    <>
      <div className="all">
        <div className="comment">
          <h3>دیدگاه‌ها و پرسش‌ها</h3>
        </div>
        <div className="nav-comment">
          <NavLink>در انتظار دیدگاه</NavLink>
          <NavLink>دیدگاه‌های من</NavLink>
          <NavLink>پرسش‌های من</NavLink>
        </div>
        <div className="empty-comment">
          <img src="/src/assets/order-empty.svg" alt="" />
          <p>هنوز هیچ نظری ندارید</p>
        </div>
      </div>
    </>
  );
}

export default DashboardComments;

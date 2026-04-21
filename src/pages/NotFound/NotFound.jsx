import React from "react";
import "./NotFound.css"
function NotFound() {
  return (
    <div className="html">
      <div class="error-container">
        <div class="error-code">404</div>
        <div class="error-message">
         اینجا خبری نیست!
        </div>
        <p class="error-desc">
         این صفحه الان تو تعطیلاته. فکر کنم بهتره برگردی صفحه اصلی قبل از اینکه قهوه‌ت سرد بشه.

        </p>
        <a href="/" class="home-button">
          بازگشت به خانه
        </a>
      </div>
    </div>
  );
}

export default NotFound;

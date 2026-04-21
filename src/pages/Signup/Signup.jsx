import { useEffect, useState } from "react";
import "./Signup.css";
import { Navigate } from "react-router-dom";
function Signup() {

    const [UserLogin, setUserLogin] = useState(false)
    useEffect(()=> {
    setTimeout(()=>{
        setUserLogin(true)
    },3000)
    },[])


  return (
    <div className="body">
      <div className="login-container">
        <form className="login-form">
          <h2>ورود به حساب</h2>
          <div className="input-group">
            <label htmlFor="email">ایمیل یا نام کاربری</label>
            <input type="text" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">رمز عبور</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="options">
            <label>
              <input type="checkbox" /> مرا به خاطر بسپار
            </label>
            <a href="#">فراموشی رمز؟</a>
          </div>
          <button type="submit">ورود</button>
        </form>
        {UserLogin ? <Navigate to="/" replace={true}/> : null}
      </div>
    </div>
  );
}

export default Signup;

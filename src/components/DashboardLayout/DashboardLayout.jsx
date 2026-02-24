
import { Link, Outlet } from 'react-router-dom'
import "./DashboardLayout.css"

function DashboardLayout() {
  return (
    <>
      <div className='hero'>
        <aside>
          <div className='right'>
            <Link to="/dashboard" >خلاصه فعالیت ها <i className='fas fa-home'></i></Link>
            <Link to="/dashboard/orders">سفارش‌ها <i className='fas fa-shop'></i></Link>
            <Link to="/dashboard/list">لیست‌های من <i className='fas fa-heart'></i></Link>
            <Link to="/dashboard/comments">دیدگاه‌ها و پرسش‌ها <i className='fas fa-comment'></i></Link>
            <Link to="/dashboard/adresses">آدرس‌ها <i className='fas fa-book'></i></Link>
            <Link to="/dashboard/giftcard">کارت هدیه<i className='fas fa-gift'></i></Link>
            </div>
        </aside>
     

      <div className='left'>
        <Outlet/>
      </div>
       </div>
    </>
    
  )
}

export default DashboardLayout

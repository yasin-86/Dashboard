import Navbar from "../../components/Navbar/Navbar"
import "./DashboardHome.css"

function DashboardHome() {
  return (
    <>
     <div className="main">
      <h3>سفارش های من</h3>
      <div className="asli">
        <div>جاری <img src="/src/assets/status-processing.svg" alt="" /></div>
        <div>تحویل شده <img src="/src/assets/status-delivered.svg" alt="" /></div>
        <div>مرجوع <img src="/src/assets/status-returned.svg" alt="" /></div>
      </div>
      </div> 
    </>
  )
}

export default DashboardHome

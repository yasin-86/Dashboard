import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import Home from "./pages/Home/Home";
import Panel from "./pages/Panel/Panel";
import DashboardLayout from "./components/DashboardLayout/DashboardLayout";
import DashboardHome from "./pages/DashboardHome/DashboardHome";

import DashboardOrders from "./pages/DashboardOrders/DashboardOrders";
import DashboardList from "./pages/DashboardList/DashboardList";
import DashboardComments from "./pages/DashboardComments/DashboardComments";
import DashboardAdresses from "./pages/DashboardAdresses/DashboardAdresses";
import DashboardGift from "./pages/DashboardGift/DashboardGift";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/dashboard" element={<Panel />} />

            <Route path="dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path="orders" element={<DashboardOrders />} />
              <Route path="list" element={<DashboardList />} />
              <Route path="comments" element={<DashboardComments />} />
              <Route path="adresses" element={<DashboardAdresses />} />
              <Route path="giftcard" element={<DashboardGift/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Components/Cart";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Login";

import Clothing from "./Components/Clothing";
import Electronics from "./Components/Electronics";
import Jewelery from "./Components/Jewellery";
import Profile from "./Components/Profile";
import Checkout from "./Components/Checkout";
import LoggedInPage from "./Components/Loggedin";

const App = () => {
  const location = useLocation();

  const isCart = location.pathname === "/cart"; // Check if the current page is the login page
  const isLoggedIn = !!sessionStorage.getItem("username"); // Check if the user is logged in

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Render Header only if not on the login page */}
      {!isCart && <Header />} 

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/jewelery" element={<Jewelery />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Login />} />
          <Route path="/loggedin" element={<LoggedInPage/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/product/:id" element={<ProductDetails />} />

        </Routes>
      </main>

      {/* Render Footer only if logged in */}
      {isLoggedIn && <Footer />}
      
      {/* Always render Sidebar */}
      <Sidebar />
    </div>
  );
};

const Root = () => (
  <Router>
    <App />
  </Router>
);

export default Root;

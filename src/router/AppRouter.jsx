import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import ScrollToTop from "../components/ScrollToTop";

export default function AppRouter() {
  return (
    <>
      <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/keranjang" element={<Cart />} />
    </Routes>
    </>
  );
}
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "./routes";
import Headermain from "../header";
import "./App.css";

function ScrollToTop({ children }) {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return children;
}

export default function App() {
  return (
    <ScrollToTop>
      <Headermain />
      <AppRoutes />
    </ScrollToTop>
  );
}

import React from "react";
import { Route, Routes } from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { Connect } from "../pages/connect";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { BestLifeEver } from "../pages/ble";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      mountOnExit
    >
      <Routes location={location}>
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/whatudoing" element={<Connect />} />
        <Route path="/bestlifeever" element={<BestLifeEver />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>

));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;

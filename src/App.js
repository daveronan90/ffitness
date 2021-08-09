import React, { useState } from "react";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import GymClassesPage from './Pages/GymClassesPage';
import Footer from "./Components/Footer";
import { ReactComponent as Logo } from "./assets/FF.svg";
import Navbar from "./Components/NavBar";
import GolfPage from "./Pages/GolfPage";

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <HashRouter>
      <div className="flex font-barlow">
        <Navbar open={open} setOpen={setOpen} />
        <div
          className={`w-full grid h-screen grid-rows-layout overflow-hidden text-white bg-black`}
        >
          <header className="flex items-center justify-center h-16">
            <Link to="/">
              <Logo />
            </Link>
          </header>
          <div className="overflow-auto bg-black">
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/opengym" component={GymClassesPage} />
              <Route path="/golf" component={GolfPage} />
            </Switch>
            <Footer />
          </div>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;

import React, { useState } from "react";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer";
import { ReactComponent as Logo } from "./assets/FF.svg";
import Navbar from "./Components/NavBar";
import Homepage from "./Pages/Homepage";
import GymClassesPage from "./Pages/GymClassesPage";
import GolfPage from "./Pages/GolfPage";
import StykuPage from "./Pages/StykuPage";
import PersonalTraining from "./Pages/PersonalTraining";

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <HashRouter>
      <div className="flex font-barlow bg-black">
        <Navbar open={open} setOpen={setOpen} />
        <div
          className={`flex flex-col items-center w-full h-screen overflow-hidden text-white bg-black`}
        >
          <header className="flex items-center justify-center h-16">
            <Link to="/">
              <Logo />
            </Link>
          </header>
          <div className="overflow-y-scroll container no-scrollbar">
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/opengym" component={GymClassesPage} />
              <Route path="/golf" component={GolfPage} />
              <Route path="/styku" component={StykuPage} />
              <Route path="/personaltraining" component={PersonalTraining} />
            </Switch>
          </div>
            <Footer />
        </div>
      </div>
    </HashRouter>
  );
};

export default App;

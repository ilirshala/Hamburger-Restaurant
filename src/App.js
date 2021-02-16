import "./App.css";
import Banner from "./components/Banner";
import Description from "./components/Description";
import Footer from "./components/Footer";
import MenuBanner from "./components/MenuBanner";
import Navbar from "./components/Navbar";
import SecondBanner from "./components/SecondBanner";
import Testimonials from "./components/Testimonials";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Menus from "./components/Menus";
import Location from "./components/Location";
import FooterNav from "./components/FooterNav";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/menus'>
            <Menus />
          </Route>
          <Route path='/location'>
            <Location />
          </Route>
          <Route path='/search/:searchTerm'>
            <SearchPage />
          </Route>
          <Route path='/'>
            <Banner />
            <Testimonials />
            <MenuBanner />
            <Description />
            <SecondBanner />
          </Route>
        </Switch>
        <FooterNav />
      </Router>
    </div>
  );
}

export default App;

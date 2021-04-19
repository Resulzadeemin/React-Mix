import './App.css';
import Header from "./Components/Header/Header"
import Section1 from "./Components/Section1/Section1"
import Section2 from "./Components/Section2/Section2"
import Section3 from "./Components/Section3/Section3"
import About from "./Components/About/Aboutt"
import Service from "./Components/Service/Service"
import Faq from "./Components/Faq/Faq"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import { BrowserRouter, Route } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Route exact path="/">
          <Section1 />
          <Section2 />
          <Section3 />
        </Route>

        <Route exact path="/aboutt">
          <About />
        </Route>

        <Route exact path="/service">
          <Service />
        </Route>

        <Route exact path="/faq">
          <Faq />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;

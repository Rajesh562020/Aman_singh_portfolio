import './App.css';
// import { Routes, Route } from "react-router-dom";

// import { WebRoutes } from './routes.jsx';

import Home from './component/home/Home.jsx';
import About from './component/about/About.jsx';
import Service from './component/service/Service.jsx';
import Header from './component/common/Header.jsx';
import Footer from './component/common/Footer.jsx';
// import BaseComponent from './component/BaseComponent.jsx';
// import ScrollToTop from './component/common/ScrollToTop.jsx';
function App() {
  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Service/>
   
    <Footer/>
    {/* <Routes> */}
      {/* <Route path={WebRoutes.HOME} element={<BaseComponent/>}> */}
        {/* <Route path={WebRoutes.HOME} element={<Home/>}/>
        <Route path={WebRoutes.ABOUT_US} element={<About/>}/>
        <Route path={WebRoutes.SERVICES} element={<Service/>}/> */}
      {/* </Route> */}

    {/* </Routes> */}
   
    </>
  );
}

export default App;

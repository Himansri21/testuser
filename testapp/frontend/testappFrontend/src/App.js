// import React from "react";
// import Homepage from "./HomePage";
// import HeroSection from "./hero";
// import BlogPost from "./Blogs";
// import Membership from "./MembershipCard";
// import AboutHimani from "./AboutFounder";
// import FooterPost from "./footer";

// const App = () => {
//   return (
//   <>
//   <Homepage />
//   <HeroSection></HeroSection>
//   <Membership />
//   <BlogPost></BlogPost>
//   <AboutHimani></AboutHimani>
//   <FooterPost></FooterPost>
//   </>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import LoginPage from "./Loginpage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;

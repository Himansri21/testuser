import React from "react";
import Homepage from "./HomePage";
import HeroSection from "./hero";
import BlogPost from "./Blogs";
import Membership from "./MembershipCard";
import AboutHimani from "./AboutFounder";
import FooterPost from "./footer";

const Home = () => {
  return (
  <>
  <Homepage />
  <HeroSection></HeroSection>
  <Membership />
  <BlogPost></BlogPost>
  <AboutHimani></AboutHimani>
  <FooterPost></FooterPost>
  </>
  );
};

export default Home;
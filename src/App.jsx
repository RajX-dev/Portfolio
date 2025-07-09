import React from 'react'
import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "../public/NavBar.jsx";
import FeatureCard from "./sections/FeatureCard.jsx";
import TechStack from "./sections/TechStack.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";

const App = () => {
    return (
        <>
            <NavBar/>
            <Hero/>
            <ShowcaseSection/>
            <FeatureCard/>
            <ExperienceSection/>
            <TechStack/>
            <Contact/>
            <Footer/>
        </>
    )
}
export default App

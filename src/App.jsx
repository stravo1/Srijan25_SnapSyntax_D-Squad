import { useState } from "react";
import NavBar from "./components/Navbar";
import LandingPage from "./components/Landing";
import AboutMe from "./components/AboutMe";
import MySkills from "./components/MySkills";
import ContactPage from "./components/ContactPage";
import Projects from "./components/Projects";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="w-full fixed top-0 z-50">
                <NavBar />
            </div>
            <div class="absolute inset-0 -z-10 h-screen w-screen overflow-y-scroll items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] text-white pt-[15vh]">
                <LandingPage />
                <AboutMe />
                <MySkills />
                <Projects />
                <ContactPage />
            </div>
        </>
    );
}

export default App;

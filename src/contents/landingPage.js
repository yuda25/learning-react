import React from "react"
import About from "./About"
import Contact from "./contact"
import Gallery from "./gallery"
import HomeContent from "./homeContent"

class LandingPage extends React.Component {
    render() {
        // console.log(window.location.pathname);
        return (
            <div>
                <HomeContent />
                <About />
                <Gallery />
                <Contact />
            </div>
        )
    }
}

export default LandingPage;
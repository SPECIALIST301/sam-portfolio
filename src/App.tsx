import Header from './components/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Stats from './sections/Stats'
import TechnicalSkills from './sections/TechnicalSkills'
import FeaturedProjects from './sections/FeaturedProjects'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Stats />
                <TechnicalSkills />
                <FeaturedProjects />
                <Certifications />
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export default App

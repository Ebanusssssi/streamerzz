import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import HowItWorks from "./components/HowItWorks"
import KeyFeatures from "./components/KeyFeatures"
import Navbar from "./components/Navbar"
import PricingPlans from "./components/PricingPlans"
import Testimonials from "./components/Testimonials"

const App = () => {
  return (
    <main className="text-sm text-neutral-300 antialiased">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <KeyFeatures />
      <PricingPlans />
      <Testimonials />
      <Footer />
    </main>
  )
}

export default App
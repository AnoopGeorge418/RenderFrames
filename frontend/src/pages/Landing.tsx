import FeatureSection from "../components/sections/FeatureSection"
import LandingSection from "../components/sections/LandingSection"
import MarketPlaceSection from "../components/sections/MarketPlaceSection"
import PricingSection from "../components/sections/PricingSection"
import WorkFlowSection from "../components/sections/WorkFlowSection"
import Navbar from "../layouts/Navbar"

const Landing: React.FC = () => {
  return (
    <div>
      <Navbar />
      <LandingSection />
      <WorkFlowSection />
      <FeatureSection />
      <MarketPlaceSection />
      <PricingSection />
    </div>
  )
}

export default Landing

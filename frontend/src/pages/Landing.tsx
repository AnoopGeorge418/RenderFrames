import DownloadAppSection from "../components/sections/DownloadAppSection"
import FeatureSection from "../components/sections/FeatureSection"
import FinalSection from "../components/sections/FinalSection"
import FooterSection from "../components/sections/FooterSection"
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
      <DownloadAppSection />
      <FinalSection />
      <FooterSection />
    </div>
  )
}

export default Landing

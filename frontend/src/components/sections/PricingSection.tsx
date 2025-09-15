import PricingCard from "../cards/PricingCard"

const PricingSection: React.FC = () => {
  return (
    <div className="mt-[10rem] flex justify-center items-center text-center flex-col">
        <h1 className="font-[belleza] text-[52px]">Simple, Transparent Pricing</h1>
        <p className="font-[benne] text-[35px]">Start free, upgrade to use RenderFrames full capacity</p>
      <PricingCard />
    </div>
  )
}

export default PricingSection

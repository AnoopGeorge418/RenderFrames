import PricingCard from "../cards/PricingCard";
import CorrectIcon from "../../assets/Icons/CorrectTicks.png";

const PricingSection: React.FC = () => {
  return (
    <div id="pricing" className="mt-[5rem] flex flex-col justify-center items-center text-center px-4 sm:px-0">
      <h1 className="font-[belleza] text-[36px] sm:text-[52px]">
        Simple, Transparent Pricing
      </h1>
      <p className="font-[benne] text-[20px] sm:text-[35px] mt-2">
        Start free, upgrade to use RenderFrames full capacity
      </p>

      {/* Cards row */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-10">
        <PricingCard
          plan="Free Plan"
          price="₹0/month"
          type="default"
          elements={[
            { content: "3 projects per month", icon: CorrectIcon },
            { content: "YouTube publishing only", icon: CorrectIcon },
            { content: "Basic editor marketplace", icon: CorrectIcon },
            { content: "Standard support", icon: CorrectIcon },
          ]}
          buttonType="Start For Free"
        />

        <PricingCard
          plan="Premium Plan"
          price="₹150/month"
          type="premium"
          elements={[
            { content: "Unlimited projects", icon: CorrectIcon },
            { content: "Multi-platform publishing", icon: CorrectIcon },
            { content: "RenderAI Assistant", icon: CorrectIcon },
            { content: "Community access", icon: CorrectIcon },
            { content: "Advanced analytics", icon: CorrectIcon },
            { content: "Priority support", icon: CorrectIcon },
            { content: "All AI models", icon: CorrectIcon },
          ]}
          buttonType="Upgrade to Premium"
        />
      </div>
    </div>
  );
};

export default PricingSection;

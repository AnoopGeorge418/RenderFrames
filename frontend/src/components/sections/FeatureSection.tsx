import FeaturesCard from "../cards/FeaturesCard"
import AiIcon from "../../assets/Icons/Ai.png"
import EditorsMarketIcon from "../../assets/Icons/Assign.png"
import AnalyticsIcon from "../../assets/Icons/Analytics.png"
import ChatIcon from "../../assets/Icons/Chat.png"
import PublishIcon from "../../assets/Icons/Publish.png"
import WorkflowIcon from "../../assets/Icons/Workflow.png"

const FeatureSection: React.FC = () => {
  return (
    <div id="feature" className=" sm:px-[60px] sm:ml-[30px] px-[20px] sm:mt-[10rem] mt-[5rem]">
      <div className="text-center">
        <h1 className="font-[belleza] sm:text-[52px] text-[24px]">Advanced Features</h1>
        <p className="font-[benne] sm:text-[35px] text-[18px]">Powerful tools to scale your video production</p>
      </div>
      <div className="grid sm:grid-cols-3 grid-row-6 gap-x-[5px] gap-y-[30px] justify-center items-center mr-[20px] ml-[20px] mx-auto place-content-center mt-15">
        {/* Feature 1 */}
        <FeaturesCard
          icon={AiIcon}
          label="Render Ai Information"
          premiumIcon={true}
          premiumCard={true}
          tittle="Render Ai"
          content="AI-powered editing suggestions, content optimization, and multi-model chat assistant."
        />

        {/* Feature 2 */}
        <FeaturesCard
          icon={EditorsMarketIcon}
          label="Editor Marketplace Information"
          premiumIcon={false}
          premiumCard={false}
          tittle="Global Editor Marketplace"
          content="Access to 24/7 editing talent across different time zones and specialties"
        />

        {/* Feature 3 */}
        <FeaturesCard
          icon={AnalyticsIcon}
          label="Analytics Information"
          premiumIcon={true}
          premiumCard={true}
          tittle="Advanced Analytics"
          content="Deep insights into performance across all platforms with AI-driven recommendations."
        />

        {/* Feature 4 */}
        <FeaturesCard
          icon={ChatIcon}
          label="Communities Information"
          premiumIcon={true}
          premiumCard={true}
          tittle="Community Platform"
          content="AI-powered editing suggestions, content optimization, and multi-model chat assistant."
        />

        {/* Feature 5 */}
        <FeaturesCard
          icon={PublishIcon}
          label="Performance Optimization Information"
          premiumIcon={false}
          premiumCard={false}
          tittle="Performance Optimization"
          content="Automated format optimization and CDN delivery for maximum engagement."
        />

        {/* Feature 6 */}
        <FeaturesCard
          icon={WorkflowIcon}
          label="Workflow Information"
          premiumIcon={true}
          premiumCard={true}
          tittle="Custom Workflows"
          content="Build automated pipelines with triggers, approvals, and conditional publishing"
        />
      </div>
    </div>
  )
}

export default FeatureSection

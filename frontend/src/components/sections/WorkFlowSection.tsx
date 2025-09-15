import WorkFlowCard from "../cards/WorkFlowCard"
import UploadIcon from "../../assets/Icons/Upload.png"
import AssignIcon from "../../assets/Icons/Assign.png"
import EditIcon from "../../assets/Icons/Play2.png"
import ReviewIcon from "../../assets/Icons/Eye.png"
import ApproveIcon from "../../assets/Icons/Approve.png"
import PublishIcon from "../../assets/Icons/Publish.png"

const WorkFlowSection: React.FC = () => {
  return (
    <div className="sm:px-[60px] sm:ml-[30px] px-[20px] mt-[-16rem] sm:mt-auto">
      <div className="text-center">
        <h1 className="font-[belleza] sm:text-[52px] text-[24px]">Complete Video Production Workflow</h1>
        <p className="font-[benne] sm:text-[35px] text-[18px]">Streamlined process from upload to publish, designed for creators, teams, and enterprises</p>
      </div>
      <div className="grid sm:grid-cols-3 grid-row-6 gap-x-[5px] gap-y-[30px] justify-center items-center mr-[20px] ml-[20px] mx-auto place-content-center mt-15">
        {/* card 1 */}
        <WorkFlowCard 
          icon={UploadIcon}
          label="Uploading Workflow details"
          stepNo="Step 1"
          tittle="Upload"
          content="Drop your raw footage with text, audio, or video instructions. Support for 4K, HDR, and all major formats."
        />

        {/* card 2 */}
        <WorkFlowCard 
          icon={AssignIcon}
          label="Assigning Workflow details"
          stepNo="Step 2"
          tittle="Assign"
          content="Choose from 1000+ verified editors or invite your team. Smart matching based on style and expertise."
        />

        {/* card 3 */}
        <WorkFlowCard 
          icon={EditIcon}
          label="Editing Workflow details"
          stepNo="Step 3"
          tittle="Edit"
          content="Editors work with industry-standard tools. Real-time progress tracking and automated backups."
        />

        {/* card 4 */}
        <WorkFlowCard 
          icon={ReviewIcon}
          label="Reviewing Workflow details"
          stepNo="Step 4"
          tittle="Review"
          content="Frame-accurate feedback with voice notes. Version control and approval workflows built-in."
        />

        {/* card 5 */}
        <WorkFlowCard 
          icon={ApproveIcon}
          label="Approving Workflow details"
          stepNo="Step 5"
          tittle="Approve"
          content="One-click approval or detailed revision requests. Quality assurance checks included."
        />

        {/* card 6 */}
        <WorkFlowCard 
          icon={PublishIcon}
          label="Publishing Workflow details"
          stepNo="Step 6"
          tittle="Publish"
          content="Automated publishing to 15+ platforms. Scheduling, A/B testing, and performance tracking."
        />
      </div>
    </div>
  )
}

export default WorkFlowSection

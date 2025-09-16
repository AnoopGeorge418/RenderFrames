import DownloadAppCard from "../cards/DownloadAppCard"
import MobileIcon from "../../assets/Icons/Mobile.png"
import DesktopIcon from "../../assets/Icons/Desktop.png"
import WebIcon from "../../assets/Icons/Web.png"
import CorrectElement from "../../assets/Icons/CorrectTicks.png"
import Download from "../../assets/Icons/Download.png"

const DownloadAppSection: React.FC = () => {
  return (
    <div id="download" className="mt-[5rem] flex flex-col justify-center items-center text-center px-4 sm:px-0">
        <h1 className="font-[belleza] text-[36px] sm:text-[52px]">
            Available Everywhere You Create
        </h1>
        <p className="font-[benne] text-[20px] sm:text-[35px] mt-2 sm:w-[1040px]">
            Access RenderFrames on any device, anywhere. Seamlessly sync your projects across mobile, desktop, and web.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
            <DownloadAppCard 
                icon={MobileIcon}
                title="Mobile Apps"
                subHeading="Create and review on the go with our native mobile apps"
                elements={[
                    {icon:CorrectElement, content:"Upload & review videos"},
                    {icon:CorrectElement, content:"Real-time notifications"},
                    {icon:CorrectElement, content:"Offline project access"},
                    {icon:CorrectElement, content:"Voice note feedback"},
                ]}
                buttonBlack={[
                    {icon: Download, text: "Download for iOS"}
                ]}
                buttonBlue={[
                    {icon: Download, text: "Download for Android"}
                ]}
            />

            <DownloadAppCard 
                icon={DesktopIcon}
                title="Desktop Apps"
                subHeading="Full-featured desktop experience for power users"
                elements={[
                    {icon:CorrectElement, content:"Advanced editing tools"},
                    {icon:CorrectElement, content:"Bulk upload & processing"},
                    {icon:CorrectElement, content:"Local file management"},
                    {icon:CorrectElement, content:"Keyboard shortcuts"},
                ]}
                buttonBlack={[
                    {icon: Download, text: "Download for Windows"}
                ]}
                buttonBlue={[
                    {icon: Download, text: "Download for MacOS"}
                ]}
            />

            <DownloadAppCard 
                icon={WebIcon}
                title="Web App"
                subHeading="Instant access from any browser, no downloads required"
                elements={[
                    {icon:CorrectElement, content:"Cross-platform compatibility"},
                    {icon:CorrectElement, content:"Auto-save & sync"},
                    {icon:CorrectElement, content:"Real-time collaboration"},
                    {icon:CorrectElement, content:"Keyboard shortcuts"},
                ]}
                buttonBlack={[
                    {icon: Download, text: "Launch Web App"}
                ]}
                buttonBlue={[
                    {icon: Download, text: "Start Free Trail"}
                ]}
            />
        </div>
    </div>
  )
}

export default DownloadAppSection

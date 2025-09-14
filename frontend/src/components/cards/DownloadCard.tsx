import downloadIcon from "../../assets/Icons/Download.png"
import mobileIcon from "../../assets/Icons/Mobile.png"
import desktopIcon from "../../assets/Icons/Desktop.png"
import webIcon from "../../assets/Icons/Web.png"

const DownloadCard = () => {
  return (
    <div className="border border-[#c7c7c7] h-[184px] w-[188px] rounded-[10px] font-[benne]">
      <div className="bg-white border border-[#c7c7c7] h-[53px] rounded-tl-[10px] rounded-tr-[10px] flex items-center justify-between px-3">
        <div>
          <p className="font-[belleza] text-[14px]">Get RenderFrames</p>
          <p className="text-[12px] text-[#9B9B9B] font-[benne]">Available on all platforms</p>
        </div>
        <img src={downloadIcon} alt="Download RenderFrame Apps"/>
      </div>

      <div className="font-[benne] h-[43px] flex items-center gap-2 px-3 cursor-pointer hover:bg-gray-100">
        <img src={mobileIcon} alt="Mobile App Download Button" className="w-5 h-6 rounded-[2px]"/>
        <div className="flex flex-col leading-tight">
          <p className="text-[14px]">Mobile Apps</p>
          <p className="text-[12px] text-[#9B9B9B]">iOS and Android</p>
        </div>
      </div>

      <div className="font-[benne] h-[43px] flex items-center gap-2 px-[11px] cursor-pointer hover:bg-gray-100">
        <img src={desktopIcon} alt="Desktop App Download Button" className="w-5 h-5" />
        <div className="flex flex-col leading-tight">
          <p className="text-[14px]">Desktop Apps</p>
          <p className="text-[12px] text-[#9B9B9B]">Windows, Mac, Linux</p>
        </div>
      </div>

      <div className="font-[benne] h-[43px] flex items-center gap-2 px-[11px] cursor-pointer hover:bg-gray-100 hover:rounded-bl-[10px] hover:rounded-br-[10px]">
        <img src={webIcon} alt="Mobile App Download Button" className="w-5 h-5"/>
        <div className="flex flex-col leading-tight">
          <p className="text-[14px]">Web App</p>
          <p className="text-[12px] text-[#9B9B9B]">Instant Access</p>
        </div>
      </div>

    </div>
  )
}

export default DownloadCard

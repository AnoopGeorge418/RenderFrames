import rightArrow from "../../assets/Icons/Arrow.png"
import playVideo from "../../assets/Icons/Play.png"

const LandingSection: React.FC = () => {
  return (
    <div id="landing" className="sm:pt-[150px] pb-[150px] relative min-h-screen flex justify-center items-center z-40">
      {/* background color */}
      <div className="absolute inset-0  mt-30">
        <div className="bg-[#73ABFF] rounded-full w-[15rem] h-[15rem] sm:w-[30rem] sm:h-[30rem] mt-20 blur-[120px] sm:blur-[180px] opacity-70 z-0"></div>
        <div className="bg-[#73ABFF] rounded w-[12rem] h-[10rem] sm:w-[25rem] sm:h-[20rem] absolute left-10 sm:ml-110 -mt-[200px] sm:mt-[-500px] blur-[120px] sm:blur-[190px] opacity-70 z-0"></div>
      </div>

      {/* Content */}
      <div className="relative text-center z-10 flex flex-col justify-center items-center">
        <div className="mb-10 p-2 sm:pl-10 sm:pr-10 pt-3 border rounded-[10px] sm:rounded-[15px] bg-[#C2DFF6] text-[#3072E4] font-[benne] w-[18rem] sm:w-[30rem] text-[10px] sm:text-[15px]">
          New: Feature Highlight will be added using react(dynamic)
        </div>
        <h1 className="font-[belleza] sm:text-[100px] text-[42px] w-[350px] sm:w-[822px] leading-[1.1]">
          The Complete Video <span className="bg-linear-to-r from-[#005EFF] to-[#CD3AE7] bg-clip-text text-transparent">Production Platform</span></h1>
        <p className="font-[benne] text-[14px] ml-[20px] mr-[20px] sm:text-[48px] sm:w-[1141px] leading-[1.1] mt-5 text-center flex justify-center items-center">Turn ideas into polished videos with effortless collaboration and direct publishing to YouTube, Instagram, and beyond</p>

        {/* CTA buttons */}
        <div className="font-[benne] mt-8 space-x-5 flex">
          <button className="border p-2 pt-3 w-[155px] h-[38px] sm:h-[61px] sm:w-[383px] rounded-[10px] text-center flex justify-center items-center gap-2 bg-linear-to-r from-[#7987FF] to-[#EE71FF] hover:bg-linear-to-r hover:from-[#4f61ff] hover:to-[#e13af7] cursor-pointer text-white text-[12px] pl-3 pr-3 sm:text-[18px]">
            Start Creating For Free
            <img src={rightArrow} alt="Start Creating For Free" className="w-3 h-3 mb-[3px]"/>
          </button>
          <button className="border p-2 pt-3 w-[155px] h-[38px] sm:h-[61px] sm:w-[383px] rounded-[10px] text-center flex justify-center items-center gap-2 bg-linear-to-r from-[#A5A5A5] to-[#5F5F5F] hover:bg-linear-to-r hover:from-[#696969] hover:to-[#3d3d3d] cursor-pointer text-white text-[12px] pl-3 pr-3 sm:text-[18px]">
            <img src={playVideo} alt="Watch Demo Video" className="w-3 h-3 mb-[3px]"/>
            Watch Demo
          </button>
        </div>

        {/* infos */}
        <div className="grid grid-cols-2 gap-6 sm:flex sm:flex-row sm:space-x-12 mt-12 font-[benne] text-center sm:text-left">
          <p className="flex flex-col sm:text-[24px]">
            <span className="sm:text-[32px] text-[#3E61FF]">3+</span>
            Platforms Supported
          </p>
          <p className="flex flex-col sm:text-[24px]">
            <span className="sm:text-[32px] text-[#3E61FF]">Unlimited</span>
            Projects on Premium
          </p>
          <p className="flex flex-col sm:text-[24px]">
            <span className="sm:text-[32px] text-[#3E61FF]">99.9%</span>
            Secure Uptime
          </p>
          <p className="flex flex-col sm:text-[24px]">
            <span className="sm:text-[32px] text-[#3E61FF]">Less Hassle</span>
            Faster Turnaround
          </p>
        </div>

      </div>
    </div>
  )
}

export default LandingSection

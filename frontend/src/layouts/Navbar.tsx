import AppLogo from "../components/common/AppLogo"
import DownloadCard from "../components/cards/DownloadCard"
import FreeTrailBtn from "../components/buttons/FreeTrailBtn"
import LoginBtn from "../components/buttons/LoginBtn"

const Navbar = () => {
  return (
    <div className="font-[benne] shadow h-[103px] rounded-bl-[10px] rounded-br-[10px] w-full">
        <div className="flex list-none items-center justify-between ml-[60px] mr-[60px] rounded-bl-[10px] rounded-br-[10px] h-full">
            <AppLogo />
            <div className="flex space-x-[27px] flex-row">
                <li className="cursor-pointer hover:bg-[#0440A7] hover:bg-clip-text hover:text-transparent">Features</li>
                <li className="cursor-pointer hover:bg-[#0440A7] hover:bg-clip-text hover:text-transparent">Marketplace</li>
                <li className="cursor-pointer hover:bg-[#0440A7] hover:bg-clip-text hover:text-transparent">Pricing</li>
                <div className="relative group">
                    <li className="cursor-pointer hover:bg-[#0440A7] hover:bg-clip-text hover:text-transparent">
                        Downloads
                    </li>
                    <div className="absolute top-full left-0 mt-1 hidden group-hover:block">
                        <DownloadCard />
                    </div>
                </div>
            </div>
            <div className="flex gap-[10px]">
                <LoginBtn />
                <FreeTrailBtn />
            </div>
        </div>
    </div>
  )
}

export default Navbar

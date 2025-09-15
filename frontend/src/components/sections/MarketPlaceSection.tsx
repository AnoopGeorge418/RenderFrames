import UsersIcon from "../../assets/Icons/Assign.png"
import TimeIcon from "../../assets/Icons/TimeMarketPlace.png"
import GuaranteeIcon from "../../assets/Icons/GauranteeMarketplace.png"

const MarketPlaceSection: React.FC = () => {
  return (
    <div id="marketplace" className="flex justify-center items-center text-center flex-col sm:mt-[10rem] mt-[5rem]">
      <h1 className="font-[belleza] text-[24px] sm:text-[52px]">Global Editor Marketplace</h1>
      <p className="font-[benne] text-[18px] sm:text-[35px] w-[387px] sm:w-[1039px]">Connect with professional video editors worldwide. From quick social media edits to cinematic productions.</p>
      <div className="flex flex-col sm:flex-row gap-17 w-[380px] sm:w-auto">
        <div className="flex justify-center items-center text-center flex-col mt-10">
            <img src={UsersIcon} alt="Number of users" className="w-[34px] sm:w-[54px] h-auto" />
            <p className="font-[benne] text-[18px] sm:text-[20px]">5000+ Expert Editors</p>
            <p className="font-[benne] text-[16px] sm:text=[18px]">Verified professionals across all video editing specialties</p>
        </div>

        <div className="flex justify-center items-center text-center flex-col mt-10">
            <img src={TimeIcon} alt="Number of users" className="w-[34px] sm:w-[54px] h-auto" />
            <p className="font-[benne] text-[18px] sm:text-[20px]">24/7 Availability</p>
            <p className="font-[benne] text-[16px] sm:text=[18px]">Global talent pool ensures round-the-clock project delivery</p>
        </div>

      <div className="flex justify-center items-center text-center flex-col mt-10">
            <img src={GuaranteeIcon} alt="Number of users" className="w-[34px] sm:w-[54px] h-auto" />
            <p className="font-[benne] text-[18px] sm:text-[20px]">Quality Guaranteed</p>
            <p className="font-[benne] text-[16px] sm:text=[18px]">Rigorous vetting process and satisfaction guarantee</p>
        </div>
      </div>
    </div>
  )
}

export default MarketPlaceSection
 
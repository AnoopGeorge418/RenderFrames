import PremiumIcon from  "../../assets/Icons/Premium.png"

type FeaturesCardProps = {
  icon: string,
  label: string,
  premiumIcon?: boolean,
  premiumCard?: boolean
  tittle: string,
  content: string
}

const FeaturesCard: React.FC<FeaturesCardProps> = ({ icon, label, premiumIcon, premiumCard, tittle, content}) => {
  return (
    <div className="border w-[346px] sm:w-[399px] h-auto sm:h-[160px] rounded-[10px] border-[#717171] hover:transition-all hover:-translate-y-1 p-6 font-[benne] flex flex-row hover:bg-gray-50">
        <div className="relative">
            <img src={icon} alt={label} className="sm:w-[39px] sm:h-auto w-[25px] h-auto"/>
            <div className="font-[benne] absolute top-[4px] sm:top-[10px] left-9 sm:left-12 flex items-center gap-2">
                <p className="text-[#3A57FF] text-[18px] sm:text-20px">{tittle}</p>
                {/* Premium icon - conditional rendering */}
                {premiumIcon && (
                  <img src={PremiumIcon} alt="Premium Feature" className="inline-block w-5 h-5 -mt-2"/>
                )}
            </div>
            {/* Premium card - conditional rendering */}
            <div className="absolute ml-65 sm:ml-70 mt-[-25px]">
              {premiumCard && (
                <p className="border inline-block p-1 rounded-[3px] sm:rounded-[5px] w-[55px] sm:w-20 h-auto sm:h-auto text-center text-[12px] sm:text-16px bg-[#FBF8A6] text-[#B9A709]">Premium</p>
              )}
            </div>
            {premiumCard}
            <div className="flex justify-center items-center font-[benne] text-[16px] sm:text-[18px] mt-7">
                <p>{content}</p>
            </div>
        </div>
    </div>
  )
}

export default FeaturesCard

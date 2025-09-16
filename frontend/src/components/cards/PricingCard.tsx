import PremiumIcon from "../../assets/Icons/Premium.png";

type ElementsItem = {
  content: string;
  icon: string;
};

type PriningProps = {
  plan: string;
  price: string;
  type: "default" | "premium" | { icon: string };
  elements: ElementsItem[];
  buttonType: string;
};

const PricingCard: React.FC<PriningProps> = ({
  plan,
  price,
  type,
  elements,
  buttonType,
}) => {
  const isIcon = typeof type === "object";
  const isPremium = type === "premium";

  return (
    <div className="w-[327px] sm:w-[502px] border rounded-[10px] shadow flex flex-col justify-between relative p-6 sm:p-0 h-auto sm:h-[500px] hover:transition-all hover:-translate-y-1">
      {/* Plan & Price */}
      <div className="font-[benne] text-[24px] sm:text-[28px] absolute left-6 sm:left-10 top-6 sm:top-10">
        <p className="text-[20px] sm:text-[28px]">{plan}</p>
        <p className="text-[16px] sm:text-[20px]">{price}</p>
      </div>

      {/* Type indicator */}
      {isIcon ? (
        <div className="absolute right-6 sm:right-10 top-6 sm:top-10">
          <img
            src={(type as { icon: string }).icon}
            alt="icon"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
        </div>
      ) : isPremium ? (
        <div className="absolute right-6 sm:right-10 top-6 sm:top-10">
          <img src={PremiumIcon} alt="premium" className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      ) : (
        <div className="p-1 sm:p-2 border rounded-[5px] inline-block pt-1 pb-0 text-center font-[benne] absolute right-6 sm:right-10 top-6 sm:top-10">
          <p className="text-[12px] sm:text-[14px]">{type}</p>
        </div>
      )}

      {/* Features list */}
      <div className="space-y-2 mt-22 sm:mt-36 ml-0 sm:ml-13 font-[benne] flex-1">
        {elements.map((el, index) => (
          <div key={index} className="flex items-center gap-2">
            <img src={el.icon} alt={el.content} className="w-4 h-4 sm:w-5 sm:h-5" />
            <p className="text-[14px] sm:text-[16px]">{el.content}</p>
          </div>
        ))}
      </div>

      {/* Button (always at bottom) */}
      <div
        className={`p-2 w-full sm:w-[90%] mx-auto mb-2 mt-9 sm:mb-8 flex justify-center items-center font-[benne] rounded-[10px] text-[16px] sm:text-[20px] 
          ${isPremium
            ? "bg-gradient-to-r from-[#6979f4] to-[#f139eb] text-white"
            : "bg-[#BCBCBC] text-black"
          }`}
      >
        <p>{buttonType}</p>
      </div>
    </div>
  );
};

export default PricingCard;

type WorkFlowCardProps = {
    icon: string,
    label: string,
    stepNo: string,
    tittle: string,
    content: string
}

const WorkFlowCard: React.FC<WorkFlowCardProps> = ({ icon, label, stepNo, tittle, content }) => {
  return (
    <div className="border w-[346px] sm:w-[399px] h-auto sm:h-[189px] rounded-[10px] border-[#717171] hover:transition-all hover:-translate-y-1 p-6 font-[benne] flex flex-row hover:bg-gray-50">
        <div className="relative">
            <img src={icon} alt={label} className="sm:w-[39px] sm:h-auto w-[25px] h-auto"/>
            <div className="font-[benne] absolute top-[-3px] left-12">
                <p className="text-[#3A57FF] text-[18px] sm:text-20px">{stepNo}</p>
                <p className="text-[16px] sm:text-20px">{tittle}</p>
            </div>
            <div className="flex justify-center items-center font-[benne] text-[16px] sm:text-[18px] mt-7">
                <p>{content}</p>
            </div>
        </div>
    </div>
  )
}

export default WorkFlowCard

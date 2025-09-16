import type { ReactNode } from "react"

type elementsItems = {
    icon: string,
    content: string
}

type buttonBlackItems = {
    icon: ReactNode,
    text: string
}

type buttonBlueItems = {
    icon: ReactNode,
    text: string
}

type DownloadAppProps = {
    icon: ReactNode,
    title: string,
    subHeading: string,
    elements: elementsItems[],
    buttonBlack: buttonBlackItems[],
    buttonBlue: buttonBlueItems[]
}

const DownloadAppCard: React.FC<DownloadAppProps> = ({ icon, title, subHeading, elements, buttonBlack, buttonBlue }) => {
  return (
    <div className="p-6 border rounded-lg shadow-md max-w-md text-center w-[327px] sm:w-[398.97px] h-[auto] font-[benne] hover:transition-all hover:-translate-y-1">
      <div className="flex justify-center items-center">
        <img src={icon as string} alt={title} className="w-7 h-8 sm:w-9 sm:h-10 mb-4" />
      </div>
      <h2 className="text-[18px] sm:text-[30px] font-bold">{title}</h2>
      <p className="text-[16px] mt-2 sm:text-[20px]">{subHeading}</p>

      <ul className="mt-10 space-y-2 text-[16px] sm:text-[20px] ml-12 sm:ml-15">
        {elements.map((el, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <img src={el.icon as string} alt="" className="w-5 h-5" />
            {el.content}
          </li>
        ))}
      </ul>

      <div className="mt-10 flex gap-2 flex-col w-full">
        {buttonBlack.map((btn, idx) => (
          <button key={idx} className="bg-[#505050] text-white px-4 py-2 rounded flex items-center justify-center gap-2 cursor-pointer">
            <div><img src={btn.icon as string} alt="" className="w-5 h-5" /></div>
            {btn.text}
          </button>
        ))}

        {buttonBlue.map((btn, idx) => (
          <button key={idx} className="bg-blue-500 text-white px-4 py-2 rounded flex items-center justify-center gap-2 cursor-pointer">
            <img src={btn.icon as string} alt="" className="w-5 h-5" />
            {btn.text}
          </button>
        ))}
      </div>
    </div>
  )
}


export default DownloadAppCard

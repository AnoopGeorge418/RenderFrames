import React from 'react'

const FinalSection: React.FC = () => {
  return (
    <div id="pricing" className="mt-[5rem] flex flex-col justify-center items-center text-center px-4 sm:px-0 mb-5">
        <h1 className="font-[belleza] text-[36px] sm:text-[52px]">
            Ready to Transform Your Video Production?
        </h1>
        <p className="font-[benne] text-[20px] sm:text-[35px] mt-2 sm:w-[1040px]">
            Join 50,000+ creators who have streamlined their workflow with RenderFrames
        </p>
        <button className='cursor-pointer mt-5 text-white bg-[#518BFF] p-1 pt-2 rounded-[10px] w-[18rem] sm:w-[30rem] font-[benne] text-[18px] sm:text-[24px]'>Start Your Free Trail</button>
    </div>
  )
}

export default FinalSection

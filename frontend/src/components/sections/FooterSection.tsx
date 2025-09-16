import { useState } from "react"
import AppLogo from "../common/AppLogo"
import Insta from "../../assets/Icons/Insta.png"
import X from "../../assets/Icons/X.png"
import Fb from "../../assets/Icons/Facebook.png"
import li from "../../assets/Icons/Linkedin.png"
import yt from "../../assets/Icons/Yt.png"

const FooterSection: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleLogoClickRedirection = () => {
    const landingSectionRedirector = (document.getElementById("landing") as HTMLElement) || null;
    if (landingSectionRedirector) landingSectionRedirector.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  const handleFeaaturesScroller = () => {
    const el = (document.getElementById("feature") as HTMLElement) || null;
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  const handleMarketplaceScroller = () => {
    const el = (document.getElementById("marketplace") as HTMLElement) || null;
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  const handlePricingScroller = () => {
    const el = (document.getElementById("pricing") as HTMLElement) || null;
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  const handleDownloadScroller = () => {
    const el = (document.getElementById("download") as HTMLElement) || null;
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  const handleInstaClick = () => { window.location.href = "https://www.instagram.com/mr__anoop_george/"; setOpen(false); };
  const handleXClick = () => { window.location.href = "https://x.com/Anoopgeorg_"; setOpen(false); };
  const handleFBClick = () => { window.location.href = "https://www.facebook.com/anoop.george.902819"; setOpen(false); };
  const handleLIClick = () => { window.location.href = "https://www.linkedin.com/in/anoop-george418/"; setOpen(false); };
  const handleYTClick = () => { window.location.href = "https://www.youtube.com/@AnoopGeorge418"; setOpen(false); };

  return (
    <div className="mt-20 bg-[#FBFBFB] shadow shadow-black rounded-tl-[10px] rounded-tr-[10px] max-sm:px-4">
      {/* Logo */}
      <div className="ml-15 pt-10 sm:ml-15 max-sm:ml-0" onClick={handleLogoClickRedirection}>
        <AppLogo />
      </div>

      {/* Tagline — set to 18px */}
      <div className="font-[belleza] text-[24px] ml-15 w-[424px] leading-6 mt-3 max-sm:w-[90%] max-sm:ml-0 max-sm:text-[18px]">
        <p>The complete video production platform for creators, teams, and enterprises.</p>
      </div>

      {/* Product — heading to 18px on mobile */}
      <div className="list-none font-[belleza] absolute ml-[40rem] mt-[-3.5rem] max-sm:static max-sm:ml-0 max-sm:mt-6">
        <h1 className="text-[24px] max-sm:text-[18px]">Product</h1>
        <ul className="text-[#4C4C4C] ">
          <li className="cursor-pointer" onClick={handleFeaaturesScroller}>Features</li>
          <li className="cursor-pointer" onClick={handleMarketplaceScroller}>Marketplace</li>
          <li className="cursor-pointer" onClick={handlePricingScroller}>Pricing</li>
          <li className="cursor-pointer" onClick={handleDownloadScroller}>Download</li>
        </ul>
      </div>

      {/* Support — heading to 18px on mobile */}
      <div className="list-none font-[belleza] ml-[55rem] mt-[-3.5rem] max-sm:ml-0 max-sm:mt-6">
        <h1 className="text-[24px] max-sm:text-[18px]">Support</h1>
        <ul className="text-[#4C4C4C]">
          <li className="cursor-pointer">Help Center</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>
      </div>

      {/* Newsletter — heading to 18px on mobile */}
      <div className="font-[belleza] text-[24px] ml-[65rem] mt-[-5.2rem] w-[249px] leading-6 max-sm:static max-sm:w-full max-sm:max-w-[90%] max-sm:ml-0 max-sm:mt-6">
        <h1 className="max-sm:text-[18px]">Get the latest renderings, straight to your inbox.</h1>
        <input
          type="mail"
          name="newsletters"
          id="newsletters"
          placeholder="Enter your email..."
          className="shadow shadow-black p-3 rounded-[10px] w-[420px] mt-5 text-[14px] outline-none max-sm:w-full"
        />
        <button className="p-[10px] mt-5 bg-linear-to-b from-[#574EFF] to-[#DB3CF0] text-white text-[14px] rounded-[10px] w-[174px] cursor-pointer max-sm:w-[140px]">
          Subscribe
        </button>
      </div>

      {/* Bottom strip — row on desktop (image 1), stacked on mobile (image 2) */}
        <div className="font-[belleza] mt-15 shadow shadow-black lg:h-[4rem] lg:pt-0
                        max-sm:h-auto max-sm:pt-4 max-sm:pb-6 max-sm:w-screen max-sm:-mx-4
                        lg:flex lg:items-center lg:justify-between">

        {/* Right: icons (desktop), centered above copyright on mobile */}
        <div className="flex gap-3 items-center lg:order-2 lg:mr-15 max-sm:order-1 max-sm:justify-center max-sm:mr-0 mt-5">
            <img src={Insta} alt="link to instagram" className="w-5 h-[23px] cursor-pointer" onClick={handleInstaClick}/>
            <img src={X} alt="link to twiiter(X)" className="w-5 h-[23px] cursor-pointer" onClick={handleXClick}/>
            <img src={Fb} alt="link to facebook" className="w-5 h-[23px] cursor-pointer" onClick={handleFBClick}/>
            <img src={li} alt="link to linkedin" className="w-5 h-[25px] cursor-pointer" onClick={handleLIClick}/>
            <img src={yt} alt="link to youtube" className="w-5 h-[28px] cursor-pointer" onClick={handleYTClick}/>
        </div>

        {/* Left: copyright (desktop), below icons on mobile */}
        <div className="ml-15 lg:ml-15 lg:order-1 max-sm:order-2 max-sm:ml-0 max-sm:text-center max-sm:mt-3">
            © <span>{new Date().getFullYear()}</span> RenderFrames. All rights reserved.
        </div>
        </div>

    </div>
  )
}

export default FooterSection

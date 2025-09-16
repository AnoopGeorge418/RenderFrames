import React, { useState } from "react";

import AppLogo from "../components/common/AppLogo";
import DownloadCard from "../components/cards/DownloadCard";
import FreeTrailBtn from "../components/buttons/FreeTrailBtn";
import LoginBtn from "../components/buttons/LoginBtn";
import HamburgerMenu from "../assets/Icons/Hamburger.png";
import CloseMenu from "../assets/Icons/Close.png"; 

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleLogoClickRedirection = () => {
    const landingSectionRedirector = document.getElementById("landing") as HTMLElement || null;
    if ( landingSectionRedirector ) {
      landingSectionRedirector.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const handleFeaaturesScroller = () => {
    const ScrollToFeatureSection = document.getElementById("feature") as HTMLElement || null;
    if ( ScrollToFeatureSection ) {
      ScrollToFeatureSection.scrollIntoView({ behavior: "smooth" })
    }
    setOpen(false);
  }

  const handleMarketplaceScroller = () => {
    const ScrollToFeatureSection = document.getElementById("marketplace") as HTMLElement || null;
    if ( ScrollToFeatureSection ) {
      ScrollToFeatureSection.scrollIntoView({ behavior: "smooth" })
    }
    setOpen(false);
  }

  const handlePricingScroller = () => {
    const ScrollToFeatureSection = document.getElementById("pricing") as HTMLElement || null;
    if ( ScrollToFeatureSection ) {
      ScrollToFeatureSection.scrollIntoView({ behavior: "smooth" })
    }
    setOpen(false);
  }

  const handleDownloadScroller = () => {
    const ScrollToFeatureSection = document.getElementById("download") as HTMLElement || null;
    if ( ScrollToFeatureSection ) {
      ScrollToFeatureSection.scrollIntoView({ behavior: "smooth" })
    }
    setOpen(false);
  }

  return (
    <div className="relative">
      {/* Navbar container */}
      <div
        className={`fixed sm:fixed font-[benne] shadow w-full z-50 top-0 left-0 transition-all duration-500 ease-in-out 
        ${open ? "h-screen bg-white" : "h-[103px] bg-white/50 backdrop-blur-md"}
        rounded-bl-[10px] rounded-br-[10px]`}
      >
        <div
          className={`flex items-center justify-between h-[103px] px-[20px] sm:px-[60px] transition-all duration-500`}
        >
          {/* Logo */}
          <div
            className={`transition-all duration-500 ${
              open ? "absolute top-[7rem] left-1/2 -translate-x-1/2 scale-150" : ""
            }`}
            onClick={handleLogoClickRedirection}
          >
            <AppLogo />
          </div>

          {/* Desktop Nav */}
          <div className="hidden sm:flex space-x-[27px] flex-row list-none">
                <li className="cursor-pointer hover:bg-[#0440A7] hover:bg-clip-text hover:text-transparent" onClick={handleFeaaturesScroller}>Features</li>
                <li className="cursor-pointer hover:bg-[#0440A7] hover:bg-clip-text hover:text-transparent" onClick={handleMarketplaceScroller}>Marketplace</li>
                <li className="cursor-pointer hover:bg-[#0440A7] hover:bg-clip-text hover:text-transparent" onClick={handlePricingScroller}>Pricing</li>
                <div className="relative group">
                    <li className="cursor-pointer hover:bg-[#0440A7] hover:bg-clip-text hover:text-transparent" onClick={handleDownloadScroller}>Downloads</li>
                    <div className="absolute top-full left-0 mt-1 hidden group-hover:block">
                        <DownloadCard />
                    </div>
                </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden sm:flex gap-[10px]">
            <LoginBtn />
            <FreeTrailBtn />
          </div>

          {/* Mobile Hamburger/Close */}
          <div className="sm:hidden flex items-center">
            <button
              className="flex items-center justify-center"
              onClick={() => setOpen((prev) => !prev)}
            >
              <img
                src={open ? CloseMenu : HamburgerMenu}
                alt="Toggle Menu"
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>

        {/* Mobile Expanded Menu */}
        {open && (
          <div className="sm:hidden flex flex-col text-left mt-28 px-8 space-y-6">
            {/* Nav Items */}
            <ul className="flex flex-col items-center space-y-6 text-xl font-semibold">
              <button className="cursor-pointer" onClick={handleFeaaturesScroller}>Features</button>
              <button className="cursor-pointer" onClick={handleMarketplaceScroller}>Marketplace</button>
              <li className="cursor-pointer" onClick={handlePricingScroller}>Pricing</li>
              <li className="cursor-pointer" onClick={handleDownloadScroller}>Downloads</li>
            </ul>

            {/* Buttons Full Width */}
            <div className="flex flex-col gap-4 mt-10 w-[full]">
              <LoginBtn />
              <FreeTrailBtn />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

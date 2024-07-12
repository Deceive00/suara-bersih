import Navbar from "@components/Navbar"
import blurred from "@assets/homePageBackground.png"
import "./landing-page.css"
import { Button } from "@components/ui/button"

const LandingPage = () => {
  return (
    <div className="bg-custom-radial-gradient w-screen h-screen border-content text-montserrat">
      {/* Blurred Image */}
      <div className="absolute overflow-y-hidden inset-0 flex justify-center items-center">
        <img src={blurred} alt="" className="absolute w-full h-full object-cover blur-lg opacity-75 rotate"/>
      </div>

      <div className="pt-16 px-16 w-full flex flex-col text-WhitePrimary">
        {/* Top */}
        <div className="w-full h-1/2 tracking-tighter">
          <div className="py-4 text-8xl">
            <h1 className="">Expose Corruption</h1>
            <h1 className="">Gain Justice</h1>
          </div>
          <div className="flex justify-center mx-auto w-3/4 pt-8 text-md">
            <span>By promoting transparency and accountability, this movement seeks to empower individuals and communities to report corrupt activities and advocate for justice</span>
          </div>
          <div className="flex flex-row justify-center aligns-center gap-x-8 py-8">
            {/* Outlined */}
            <Button variant="outline" className="tracking-wide text-WhitePrimary bg-transparent py-6 px-8 text-md">View Threads</Button>
            {/* Filled */}
            <Button variant="outline" className="tracking-wide bg-white text-RedPrimary py-6 px-8 text-md">Join Community</Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="w-full h-1/2">
          {/* Image Phone Mockup */}
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage

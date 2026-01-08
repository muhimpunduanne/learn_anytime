import { Smartphone, Apple, Check } from "lucide-react";
import image from "../assets/_-removebg-preview.png";

const LearnAnytimePage = () => {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-8">

      <section className="bg-[#09765e] py-16 px-6 rounded-2xl overflow-hidden w-full max-w-6xl">
        <div className="rounded-2xl flex flex-col md:flex-row items-stretch overflow-hidden">
          {/* LEFT IMAGE CARD */}
          <div className="bg-[#d9f45c] w-full md:w-[420px] flex justify-center items-center p-10 rounded-2xl overflow-hidden">
            <img src={image} alt="photo" className="w-72 object-contain" />
          </div>

          {/* RIGHT CONTENT */}
          
          <div className="flex-1 text-white px-10 py-12 flex flex-col justify-center">
            {/* Tagline with icon */}
            <div className="flex items-center gap-3">
              <div className="bg-lime-400 text-green-900 rounded-full p-2 flex items-center justify-center">
                <Smartphone className="w-4 h-4" />
              </div>
              <span className="text-lime-400 font-semibold text-sm uppercase tracking-wide">
                Mobile App
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold mt-3 leading-tight">
              Learn Anytime <br /> Anywhere
            </h1>

            {/* Description */}
            <p className="text-gray-200 mt-4 max-w-md">
              Take your lessons with you. Practice English at your own pace
              using the ABA English mobile app.
            </p>

            {/* Store Buttons */}
            <div className="flex gap-4 mt-6">
              {/* Google Play */}
              <div className="bg-black rounded-md px-6 py-3 flex items-center gap-2 hover:bg-gray-900 transition w-48">
                <Smartphone className="text-white w-6 h-6" />
                <div>
                  <p className="text-xs text-gray-300">Get it on</p>
                  <p className="font-semibold text-white">Google Play</p>
                </div>
              </div>

              {/* App Store */}
              <div className="bg-black rounded-md px-6 py-3 flex items-center gap-2 hover:bg-gray-900 transition w-48">
                <Apple className="text-white w-6 h-6" />
                <div>
                  <p className="text-xs text-gray-300">Available on the</p>
                  <p className="font-semibold text-white">App Store</p>
                </div>
              </div>
            </div>

            {/* Features in two columns */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-100">
              {/* Left column */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-white flex items-center justify-center rounded-sm">
                    <Check className="w-3 h-3 text-black" />
                  </span>
                  Sync across all devices
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-white flex items-center justify-center rounded-sm">
                    <Check className="w-3 h-3 text-black" />
                  </span>
                  Push notifications
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-white flex items-center justify-center rounded-sm">
                    <Check className="w-3 h-3 text-black" />
                  </span>
                  Offline study mode
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-white flex items-center justify-center rounded-sm">
                    <Check className="w-3 h-3 text-black" />
                  </span>
                  Topic-based classes
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-white flex items-center justify-center rounded-sm">
                    <Check className="w-3 h-3 text-black" />
                  </span>
                  Live class access
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-white flex items-center justify-center rounded-sm">
                    <Check className="w-3 h-3 text-black" />
                  </span>
                  Daily goals
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LearnAnytimePage;

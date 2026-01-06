const LearnAnytime = () => {
    return (
      <section className="bg-[#20443c] py-16 px-6">
        <div className="max-w-6xl mx-auto rounded-2xl flex flex-col md:flex-row items-center md:items-stretch gap-0 overflow-hidden">
          
          {/* LEFT IMAGE CARD */}
          <div className="bg-[#d9f45c] w-full md:w-[420px] flex justify-center items-center p-10">
            <img
              src="/phone-girl.png"
              alt="Mobile learning"
              className="w-72 object-contain"
            />
          </div>
  
          {/* RIGHT CONTENT */}
          <div className="flex-1 text-white px-10 py-12 flex flex-col justify-center">
            {/* Tagline */}
            <span className="text-lime-400 font-semibold text-sm uppercase tracking-wide">
              Mobile App
            </span>
  
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
              <div className="bg-black rounded-md px-6 py-3 text-center hover:bg-gray-900 transition w-48">
                <p className="text-xs text-gray-300">Get it on</p>
                <p className="font-semibold text-white">Google Play</p>
              </div>
  
              <div className="bg-black rounded-md px-6 py-3 text-center hover:bg-gray-900 transition w-48">
                <p className="text-xs text-gray-300">Available on the</p>
                <p className="font-semibold text-white">App Store</p>
              </div>
            </div>
  
            {/* Features */}
            <ul className="mt-8 space-y-2 text-sm text-gray-100">
              <li>✔ Sync across all devices</li>
              <li>✔ Push notifications</li>
              <li>✔ Offline study mode</li>
              <li>✔ Topic-based classes</li>
              <li>✔ Live class access</li>
              <li>✔ Daily goals</li>
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
  export default LearnAnytime;
  
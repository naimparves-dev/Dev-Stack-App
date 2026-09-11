import HeroImage from "../assets/banner-stack.png";

export const Hero = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-5 mt-12 md:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* Left Content */}
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-[60px] leading-[1.05] font-bold text-[#111827]">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-[#FF512F] to-[#C026D3] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h2>

          <p className="mt-6 text-base md:text-[17px] leading-7 text-[#4B5563]">
            Explore frontend, backend, database, and tooling options,
            <br className="hidden md:block" />
            compare them side by side, and put together the stack that fits your
            <br className="hidden md:block" />
            next project.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-8 md:mt-10">
            <button className="px-5 py-3 rounded-md text-white text-sm font-medium bg-gradient-to-r from-[#FF512F] to-[#EC4899]">
              Explore Technologies
            </button>

            <button className="px-10 py-3 rounded-md border border-gray-200 text-[#374151] text-sm">
              Learn more
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={HeroImage}
            alt="Development Stack"
            className="w-[280px] sm:w-[360px] md:w-[400px]"
          />
        </div>

      </div>
    </section>
  );
};
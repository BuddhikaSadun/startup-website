import img from "../../assets/images/bg.jpg";

export default function Hero({ hero }) {
  return (
    <div className="relative flex justify-center shadow-md overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{ backgroundImage: `url(${img})` }}
      ></div>

      <div className="relative z-10 w-full max-w-[640px] px-6 py-12 sm:px-10 md:px-16 lg:px-20 lg:py-20 text-center text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
          {hero.headline}
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-lg sm:max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
          {hero.subText}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="#work"
            className="px-5 py-2 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition"
          >
            {hero.callToActions}
          </a>
        </div>
      </div>
    </div>
  );
}

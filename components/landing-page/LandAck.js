import Image from "next/image";

const LandAck = () => {
  return (
    <div className="relative flex flex-col justify-center my-20 mx-4 md:mx-20 lg:mx-36">
      <h2 className="text-3xl sm:text-4xl lg:text-4xl mb-3 sm:mb-4 lg:mb-6 font-bold">
        Acknowledgement of Territory
      </h2>
      <div className="relative flex flex-row items-center justify-between mb-20">
        {/* Background Box */}
        <div className="absolute inset-0 z-0 bg-dark-purple ml-6 rounded-2xl transform -translate-x-5 translate-y-5"></div>

        {/* Main Content Box */}
        <div className="relative flex flex-col-reverse lg:flex-row items-center border border-black bg-light-purple ml-6 justify-between rounded-2xl py-6 px-12 z-10">
          <div className="flex flex-col justify-center lg:w-1/2 w-full">
            <p className="text-base sm:text-lg mb-4 sm:mb-6 lg:mb-8 text-secondary-text">
              Queen’s University is situated on the territory of the
              Haudenosaunee and Anishinaabek.
            </p>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 lg:mb-8 text-secondary-text">
              Ne Queen’s University e’tho nón:we nikanónhsote tsi nón:we ne
              Haudenosaunee táhnon Anishinaabek tehatihsnonhsáhere ne
              onhwéntsya.
            </p>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 lg:mb-8 text-secondary-text">
              Gimaakwe Gchi-gkinoomaagegamig atemagad Naadowe miinwaa
              Anishinaabe aking.
            </p>
            <a
              href="https://www.queensu.ca/indigenous/ways-knowing/workshops-and-training"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row pt-6 transition ease-in-out delay-100 hover:translate-x-2"
            >
              <span className="text-[20px] font-semi-bold pr-6">
                Learn More
              </span>
              <Image
                src={`/assets/arrow.svg`}
                alt="Learn More"
                width={25}
                height={25}
              />
            </a>
          </div>
          <div className="flex lg:flex-col md:flex-row flex-col gap-4 justify-center pb-4">
            <Image
              src={`/landing-page/anishinabe.svg`}
              alt="Anishinaabe"
              className="max-w-full h-auto" // Make image responsive
              width={290}
              height={290}
            />
            <Image
              src={`/landing-page/haudenosaunee.svg`}
              alt="Haudenosaunee"
              className="max-w-full h-auto" // Make image responsive
              width={290}
              height={290}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandAck;

import Image from "next/image";
const LandAck = () => {
  return (
    <div className="relative flex flex-col justify-center my-20">
      <h1 className="text-[36px] font-bold mx-8 md:mx-20 lg:mx-36 mb-8">
        Acknowledgement of Territory
      </h1>
      <div className="relative mx-8 md:mx-20 lg:mx-36 flex flex-row items-center justify-between mb-20">
        {/* Background Box */}
        <div className="absolute inset-0 z-0 bg-dark-purple rounded-2xl transform -translate-x-5 translate-y-5"></div>

        {/* Main Content Box */}
        <div className="relative flex flex-row items-center border border-black bg-light-purple justify-between rounded-2xl py-6 px-12 z-10">
          <div className="flex flex-col justify-center w-1/2">
            {/* <h2 className="text-[24px] font-bold">Sponsor Us</h2> */}
            <p className="text-[18px] mt-4 text-secondary-text">
              Queen’s University is situated on the territory of the
              Haudenosaunee and Anishinaabek.
            </p>
            <p className="text-[18px] mt-4 text-secondary-text">
              Ne Queen’s University e’tho nón:we nikanónhsote tsi nón:we ne
              Haudenosaunee táhnon Anishinaabek tehatihsnonhsáhere ne
              onhwéntsya.
            </p>
            <p className="text-[18px] mt-4 text-secondary-text">
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
          <div className="flex flex-col gap-6">
            <Image
              src={`/landing-page/anishinabe.svg`}
              alt="Learn More"
              width={300}
              height={300}
            />
            <Image
              src={`/landing-page/haudenosaunee.svg`}
              alt="Learn More"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandAck;

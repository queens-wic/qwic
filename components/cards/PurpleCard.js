import Link from "next/link";
import Image from "next/image";

const PurpleCard = ({ title, desc, cta, link, img }) => {
  return (
    <div className="relative h-full flex-1 ml-5 mb-10">
      {/* Background Box */}
      <div className="absolute inset-0 z-0 bg-dark-purple rounded-2xl transform -translate-x-5 translate-y-5"></div>
      {/* Main Content Box */}
      <div className="relative flex flex-col h-full border border-black bg-light-purple justify-between rounded-2xl p-6 z-10 w-full">
        <div className="flex flex-col justify-center my-auto">
          {img && (
            <div className="relative w-[90px] h-[90px] flex items-center justify-center">
              <Image
                src={img}
                alt="Card Image"
                className="py-2"
                layout="fill"
                objectFit="contain"
              />
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl lg:text-3xl my-2 sm:my-3 lg:my-4 font-bold">
            {title}
          </h2>
          <p className="text-base sm:text-lg mb-4 sm:mb-6 lg:mb-8 text-secondary-text">
            {desc}
          </p>
        </div>
        <Link href={link}>
          <div className="flex justify-between items-center gap-6 w-fit py-4 transition ease-in-out delay-100 hover:translate-x-2">
            <span className="text-[20px] font-semi-bold">{cta}</span>
            <Image
              src={`/assets/arrow.svg`}
              alt="Learn More"
              width={25}
              height={25}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PurpleCard;

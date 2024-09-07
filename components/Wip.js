import Image from "next/image";

export default function Wip() {
  return (
    <div>
      <div className="my-20 flex flex-col justify-center items-center">
        <Image
          priority
          src="/assets/construction.svg"
          height={120}
          width={120}
          alt="construction"
        />
        <h1 className="lg:text-3xl md:text-2xl text-xl text-center mt-5">
          Sorry, this page is currently under construction!
        </h1>
        <p className="md:text-md text-sm text-[#a8afb5] pb-5">
          Content is coming soon :))
        </p>
      </div>
    </div>
  );
}

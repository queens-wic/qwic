export default function Sponsorship() {
  return (
    <div>
      {/* Heading */}
      <div className="flex justify-center items-center pt-10 mx-4 sm:mx-8 md:mx-16 lg:mx-36">
        <div className="relative">
          <h1 className="text-[36px] font-bold">Sponsorships</h1>
          <div className="z-10 absolute top-0 -left-10 w-44 h-44  bg-light-pink rounded-full mix-blend-multiply filter blur-2xl opacity-95 animate-blob"></div>
          <div className="z-10 absolute right-10 w-44 h-44  bg-light-purple rounded-full filter mix-blend-multiply blur-2xl opacity-95 animate-blob animation-delay-4000"></div>
          <p className="text-secondary-text text-[18px] mt-4">
            Our sponsors make it possible for us to build an inclusive community
            for women, underrepresented minorities, and technology enthusiasts.
          </p>
          <p className="text-secondary-text text-[18px] mt-4">
            Partner with us to promote your Kingston business and support our
            4th annual QWIC hackathon, where students will innovate and excel.
            Stay tuned as we confirm more sponsors for HackHer 2025!
          </p>
          <p className="text-secondary-text text-[18px] mt-4">
            Want to help make this event a reality? Send us an email{" "}
            <a
              href="mailto:qwic_finance@compsa.queensu.ca"
              className="text-alt-purple text-lg hover:underline font-poppins"
            >
              qwic_finance@compsa.queensu.ca
            </a>
          </p>
        </div>
      </div>
      {/* sponsorship package */}
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-36 pt-20">
        <h2 className="text-[30px] font-bold pb-10">Our Sponsorship Package</h2>
        <div className="mb-40">
          <iframe
            src="/qwic_sponsorship_package.pdf"
            className="w-full h-[1000px] border"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

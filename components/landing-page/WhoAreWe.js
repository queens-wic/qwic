const WhoAreWe = () => {
  return (
    <div className="my-20 mx-4 md:mx-20 lg:mx-36 flex flex-col">
      <h1 className="text-3xl sm:text-4xl lg:text-4xl mb-3 sm:mb-4 lg:mb-6 font-bold">
        Who Are We
      </h1>
      <div className="flex w-full gap-10">
        <div className="relative w-full ml-5">
          {/* Background Box */}
          <div className="absolute inset-0 z-0 flex-1 h-full bg-dark-blue rounded-2xl transform -translate-x-5 translate-y-5"></div>
          {/* Main Content Box */}
          <div className="relative flex flex-row items-center border border-black bg-light-blue justify-between rounded-2xl py-6 px-12 z-10">
            <div className="flex flex-col justify-center">
              <p className="text-[18px] text-secondary-text">
                Queen’s Women in Computing (QWIC) is a student-run organization
                at Queen’s University dedicated to empowering women and
                historically underrepresented groups in the tech industry. Our
                mission is to foster an inclusive and supportive community where
                individuals with a passion for technology can connect, grow, and
                achieve their full potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;

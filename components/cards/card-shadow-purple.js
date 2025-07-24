const CardShadowPurple = ({ children }) => {
    return (
<div className="relative w-[200px] h-[200px] md:w-[270px] md:h-[268px]">
<div className="absolute inset-0 bg-dark-purple rounded-xl transform -translate-x-2 translate-y-2 z-0" />
  
        <div className="relative z-10 ">
          {children}
        </div>
      </div>
    );
  };
  
export default CardShadowPurple;
  
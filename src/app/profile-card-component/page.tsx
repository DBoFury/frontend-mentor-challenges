const page = () => {
  return (
    <div className="relative flex items-center justify-center h-screen font-kumbh-sans overflow-clip bg-pcc-dark-cyan">
      <main className="flex flex-col w-[14rem] h-[16.5rem] bg-white z-10 shadow-md rounded-2xl sm:h-[18rem] sm:w-[15.5rem] md:h-[20rem] md:w-[17rem] dt:h-[23rem] dt:w-[22rem]">
        <div
          className={`${
            process.env.NODE_ENV ? "bg-pcc-card-prod" : "bg-pcc-card"
          } w-full h-[35%] rounded-t-2xl bg-contain`}
        />
        <div className="relative space-y-1 h-[40%] w-full flex flex-col justify-center items-center">
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 rounded-full border-4 border-white -translate-y-1/2 ${
              process.env.NODE_ENV ? "bg-pcc-profile-prod" : "bg-pcc-profile"
            } w-[5rem] h-[5rem] bg-contain bg-no-repeat bg-center sm:w-[5.5rem] sm:h-[5.5rem] md:w-[6rem] md:h-[6rem] dt:w-[6.5rem] dt:h-[6.5rem]`}
          />
          <div className="pt-[15%] flex space-x-2 justify-center text-xs sm:text-sm md:text-base dt:text-lg">
            <h3 className="font-bold text-pcc-very-dark-desaturated-blue">
              Victor Crest
            </h3>
            <p className="text-pcc-dark-gray">26</p>
          </div>
          <p className="text-center text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem]">
            London
          </p>
        </div>
        <span className="w-full border-b border-pcc-off-white border-opacity-40"></span>
        <div className="flex items-center justify-around flex-1 px-4">
          <div className="flex flex-col items-center">
            <h2 className="text-sm font-bold uppercase text-pcc-very-dark-desaturated-blue md:text-base dt:text-lg">
              80k
            </h2>
            <p className="text-pcc-dark-gray text-[0.5rem] tracking-widest md:text-[0.65rem] dt:text-[0.7rem]">
              Followers
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-sm font-bold uppercase text-pcc-very-dark-desaturated-blue md:text-base dt:text-lg">
              803k
            </h2>
            <p className="text-pcc-dark-gray text-[0.5rem] tracking-widest md:text-[0.65rem] dt:text-[0.7rem]">
              Likes
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-sm font-bold uppercase text-pcc-very-dark-desaturated-blue md:text-base dt:text-lg">
              1.4k
            </h2>
            <p className="text-pcc-dark-gray text-[0.5rem] tracking-widest md:text-[0.65rem] dt:text-[0.7rem]">
              Photos
            </p>
          </div>
        </div>
      </main>
      <div
        className={`absolute top-0 -translate-y-1/2 -translate-x-[53%] z-0 ${
          process.env.NODE_ENV
            ? "bg-pcc-pattern-top-prod"
            : "bg-pcc-pattern-top"
        } bg-contain bg-no-repeat w-[60rem] h-[60rem]`}
      />
      <div
        className={`absolute bottom-0 translate-y-[63.5%] translate-x-[48%]  z-0 ${
          process.env.NODE_ENV
            ? "bg-pcc-pattern-bottom-prod"
            : "bg-pcc-pattern-bottom"
        } bg-center bg-contain bg-no-repeat w-[60rem] h-[60rem]`}
      />
    </div>
  );
};

export default page;

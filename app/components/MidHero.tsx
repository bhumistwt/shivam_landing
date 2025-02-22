const MidHero = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-white">
      <div className="flex flex-row gap-2 w-[60%] h-[50%]">
        <div className=" h-1/1 w-1/3 flex flex-col gap-2 ">
          <div className="h-[20%] w-full rounded-lg border border-black flex justify-center items-center text-center">
            <h1 className="font-bold text-green-400">About us</h1>
          </div>
          <div className="h-[80%] w-full rounded-lg gap-3 flex justify-center flex-col text-center items-center border border-black">
            <h1 className="text-bold">Vision</h1>
            <p>
              <span className="text-green-400">Democratize blockchain</span>
              with uncompromised principles.
            </p>
            <p>
              {" "}
              Innovate with
              <span className="text-green-400">user-friendly tech</span>,
              bridging current and future
              <span className="text-green-400">blockchain applications</span>.
            </p>
          </div>
        </div>
        <div className="h-1/1 w-1/3 flex flex-col gap-2">
          <div className="h-[50%] w-full rounded-lg border border-black gap-3 flex justify-center flex-col text-center items-center">
            <h1 className="font-bold">Mission</h1>
            <p>
              Build an <span className="text-green-400">ecosystem</span>
              where <span className="text-green-400">collaboration</span> leads
              to <span className="text-green-400">mutual success</span>.
            </p>
          </div>
          <div className="h-[50%] w-full rounded-lg border border-black gap-3 flex justify-center flex-col text-center items-center">
            <h1 className="font-bold"> Company Type</h1>
            <p>
              NCOG Ltd: A forward thinking,
              <span className="text-green-400">tech-driven company</span>
            </p>
          </div>
        </div>
        <div className="h-1/1 w-1/3 border border-black gap-3 flex justify-center flex-col text-center items-center rounded-lg">
          <h1 className="font-bold">Background</h1>
          <p className="w-64  ">
            Founded with the goal of
            <span className="text-green-500">empowering users</span> through
            decentralized technology loke
            <span className="text-green-500">Blockchain & Web3</span>.
          </p>{" "}
          <p className="w-64">
            A diverse team with expertise in environment, technology, and
            finance, focused on environment challenges
          </p>
        </div>
      </div>
    </div>
  );
};

export default MidHero;

const Hero = () => {
    return (
        
        <div className="flex flex-col justify-center space-y-5 items-center bg-green-500 h-screen">
            <h1 className=" text-lg font-bold text-black ">NEW GREEN DEAL CORPORATION'S</h1>
            <h2 className="text-5xl font-bold">WEB3 SLIDE DECK</h2>
            <h3 className="text-center">Welcome to the future of Sustainable Blockchain where services are decentralized, secure,
                <br></br>privacy ensured and eco-friendly.
            </h3>
            <div className="flex flex-row space-x-10 pt-10">
                <div className="  bg-black text-white rounded-full px-6 py-3">www.ncog.earth</div>
                <div className="  text-black border-black border-2 rounded-full px-6 py-3">info@ncog.earth</div>
                </div>
        </div>
      
    );
};

export default Hero;

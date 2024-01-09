import SearchInput from "../ui/SearchInput";

const Banner = () => {
    return (
        <div className="relative bg-banner-bg rounded-xl w-full sm:w-[1248px] mt-5 mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-center h-full">
                <div className="sm:w-1/2">
                    <h1 className="font-extrabold text-[64px]">Buy your <br />dream plants</h1>
                    <div className="flex justify-between w-[318px]">
                        <div>
                            <div>50+</div>
                            <div>Plant Species</div>
                        </div>
                        <div>
                            <img src="/line.svg" alt="line" />
                        </div>
                        <div>
                            <div>100+</div>
                            <div>Customers</div>
                        </div>
                    </div>
                    <SearchInput placeholder="What are you looking for?" />
                </div>
                <div className="sm:w-1/2 flex justify-center items-center">
                    <img 
                        src="/arrow1.svg" 
                        alt="arrow"
                        className="hidden sm:block"
                    />
                    <div className="relative ml-16 mt-[123px]">
                        <img className="z-0 hidden sm:block" src="/50proc-circle.svg" alt="50proc-circle" />
                        <img className="z-[1] absolute bottom-0 right-0 hidden sm:block" src="/greenInHand.png" alt="greenInHand" />
                    </div>
                    <img 
                        src="/arrow2.svg" 
                        alt="arrow2"
                        className="hidden sm:block"
                    />
                </div>
            </div>
        </div>
    );
}

export default Banner;

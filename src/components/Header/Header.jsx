import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-between 
        max-w-[1057px] mx-auto px-4
        mt-5">
            <Link to="/">
                <div className="font-bold">GREENMIND</div>
            </Link>
            <div>
                <Link to="/basket">
                    <img src="/basket.svg" alt="basket" />
                </Link>
            </div>
        </div>
    )
}

export default Header;
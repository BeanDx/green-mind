import Header from "../../Header/Header";
import ShopCard from "../../ShopCard/ShopCard";

import closeIcon from '/close.svg';

const Basket = ({ basket, removeFromBasket }) => {
    return (
        <div>
            <Header />
            <div>
                <div className="flex w-[1248px] h-[512px] mt-5 mx-auto px-4 justify-center pl-40.5 pr-40.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-4 justify-center">
                        {basket.map((item, index) => (
                            <ShopCard
                                key={index}
                                name={item.name}
                                price={item.price}
                                pic={item.pic}
                                icon={closeIcon}
                                removeFromBasket={() => removeFromBasket(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket;
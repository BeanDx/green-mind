import closeIcon from '/close.svg';

const ShopCard = ({ name, price, pic, addToBasket, icon, removeFromBasket }) => {
    return (
        <div className="flex mx-auto rounded-2xl">
            <div className="flex flex-col border-2 rounded-2xl h-[300px] w-[210px] bg-[#c1dcdc] p-1">
                <div>
                    <img
                        src={pic}
                        alt="img"
                        className='rounded-2xl'
                    />
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col'>
                        <div className='font-medium'>
                            {name}
                        </div>
                        <div className='text-[#1E1E1E80]'>
                            ${price}
                        </div>
                    </div>
                    <div>
                        <a href="#">
                            {icon === closeIcon ? (
                                <img
                                    src={icon}
                                    alt="remove"
                                    width="25px"
                                    height="25px"
                                    onClick={removeFromBasket}
                                />
                            ) : (
                                <img
                                    src={icon}
                                    alt="buy"
                                    width="25px"
                                    height="25px"
                                    onClick={addToBasket}
                                />
                            )}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopCard;

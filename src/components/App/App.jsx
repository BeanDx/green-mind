import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import ShopCard from '../ShopCard/ShopCard';
import SearchInput from '../ui/SearchInput';

import { products } from '../../constants';
import Basket from '../Pages/Basket/Basket';

import addToBasketIcon from '/basket.svg';

const App = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [basket, setBasket] = useState([]);

  const addToBasketHandler = product => {
    setBasket([...basket, product]);
    alert('Товар добавлен в корзину!');
  }

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const sortedProducts = () => {
    let sorted = [...products];

    // Sort by price
    if (selectedValue === 'ascending') {
      sorted = sorted.sort((a, b) => a.price - b.price);
    } else if (selectedValue === 'descending') {
      sorted = sorted.sort((a, b) => b.price - a.price);
    }

    // Filter by search term
    if (searchTerm.trim() !== '') {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      sorted = sorted.filter((product) =>
        product.name.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }

    return sorted;
  };

  const searchChangeHandle = (e) => {
    setSearchTerm(e.target.value);
  };

  const removeFromBasketHandler = (index) => {
    const newBasket = [...basket];
    newBasket.splice(index, 1);
    setBasket(newBasket);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Banner />
                <div className="w-full mt-5 mx-auto px-4">
                  <div className="flex items-center justify-end">
                    <SearchInput
                      placeholder="Search products..."
                      onChange={searchChangeHandle}
                    />
                    <div className="relative inline-block text-left align-middle pt-3 pl-3">
                      <select
                        name="sortProducts"
                        id="sortProductsId"
                        value={selectedValue}
                        onChange={handleChange}
                        className="appearance-none border
                                  text-better-banner-bg bg-white rounded py-2 px-4 
                                  leading-tight focus:outline-none focus:border-blue-500"
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        <option value="ascending">From small to large</option>
                        <option value="descending">From large to small</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M7 7l3-3 3 3m0 6l-3 3-3-3"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="pl-4 pt-[10px]">
                      <Link to="/basket">
                        <img src="/basket.svg" alt="basket" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex w-full mt-5 mx-auto px-4 justify-center">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-4 justify-center">
                    {sortedProducts().map((product) => (
                      <ShopCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        pic={product.pic}
                        icon={addToBasketIcon}
                        addToBasket={() => addToBasketHandler(product)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            }
          />
          <Route path="/basket" element={<Basket basket={basket} removeFromBasket={removeFromBasketHandler} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

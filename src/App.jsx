import { useEffect, useState } from "react";

import "./App.css";
import "boxicons";
import { Card } from "./components/Card/Card";

function App() {
  const [filter, setFilter] = useState(true);

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProductList(json));
  }, []);

  const filterUpdate = () => {
    setFilter((val) => !val);
  };

  return (
    <>
      {/* this is header  */}
      <div>
        <div className='head'>
          <div>
            <img src='/img/Vector.png' height={"25px"} />
          </div>
          <div className='head-logo'>
            <h2>LOGO</h2>
          </div>
          <div className='head-input'>
            <box-icon name='search-alt'></box-icon>
            {/* <img src="/img/search-normal.png" height={'15px'} /> */}
            <box-icon name='heart'></box-icon>
            <box-icon name='shopping-bag'></box-icon>
            <box-icon name='user'></box-icon>
            <div className='head-profile'>
              <p>ENG</p>
              <box-icon name='chevron-down'></box-icon>
            </div>
          </div>
        </div>
        <div className='head-info'>
          <h3>SHOP</h3>
          <h3>SKILL</h3>
          <h3>STORIES</h3>
          <h3>ABOUT</h3>
          <h3>CONTACT US</h3>
        </div>
      </div>
      {/* hr line below the line */}
      <hr />
      <div className='moto'>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className='main'>
        <hr />
        <div className='main-menu'>
          <div className='filter-button head-profile'>
            <h5>69420 ITEMS</h5>
            <button onClick={filterUpdate}>
              {filter ? "< hide filter" : "> show filter"}
            </button>
          </div>
          <div className='head-profile'>
            <h5>RECOMMENDED</h5>
            <box-icon name='chevron-down'></box-icon>
          </div>
        </div>
        <hr />
        <div className='product'>
          {filter && (
            <div className='product-filter'>
              <div className="align">
                <input type='checkbox' id='cust' />
                <label htmlFor='cust'>Customizble</label>
              </div>
            </div>
          )}
          <div className='product-list'>
            {productList.map((product) => {
              return <Card product={product} key={product.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

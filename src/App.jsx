import { useEffect, useState } from 'react';

import './App.css';
import 'boxicons';
import { Card } from './components/Card/Card';
import { Seltor } from './components/Seltor/Seltor';

function App() {
  const [filter, setFilter] = useState(true);

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
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
            <img src='/img/Vector.png' height={'25px'} />
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
              {filter ? '< hide filter' : '> show filter'}
            </button>
          </div>
          <div>
            <div className='head-profile'>
              RECOMMENDED
              <box-icon name='chevron-down'></box-icon>
            </div>
            <Seltor />
          </div>
        </div>
        <hr />
        <div className='product'>
          {filter && (
            <div className='product-filter'>
              <div className='align'>
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
        <div className='footer'>
          <div className='footer-contact'>
            <div>
              <h2>Be the first to know</h2>
              <p>Sign up for updates from mettā muse.</p>
              <div>
                i<input placeholder='Enter your e-mail...' className='input' />
                <button>SUBSCRIBE</button>
              </div>
            </div>
            <div>
              <h2>CONTACT US</h2>
              <p>+44 221 133 5360</p>
              <p>customercare@mettamuse.com</p>
              <h2>CURRENCY</h2>
              <p>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
          <hr className='div' />
          <div className='logo' >
            <div>
              <h2>mettā muse</h2>
              <p>About Us</p>
              <p>Stories</p>
              <p>Artisans</p>
              <p>Boutiques</p>
              <p>Contact Us</p>
              <p>EU Compliances Docs</p>
            </div>
            <div>
              <h2>QUICK LINKS</h2>
              <p>Orders & Shipping</p>
              <p>Join/Login as a Seller</p>
              <p>Payment & Pricing</p>
              <p>Return & Refunds</p>
              <p>FAQs</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
            <div>
              <img src='/img/Frame 136278.png' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

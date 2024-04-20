// import React from "react";
import "./card.css";

export const Card = (props) => {
  console.log(props);
  const product = props.product;

  const name = product.title;

  return (
    <div className='card'>
      <img src={product.image} width='100%' height='80%' alt='product_img' />
      <h3>{name.length > 10 ? name.slice(0, 10) : name}</h3>
      <p className='sign'>
        {" "}
        <a href=''>Sign in</a> or Create account to like{" "}
      </p>
      <div className='product-review'>
        <div className='rate'>
          <box-icon name='star'></box-icon>
          <p>{":" + product.rating.rate}</p>
        </div>

        <p>
          <box-icon type='solid' name='heart'></box-icon>
        </p>
      </div>
    </div>
  );
};

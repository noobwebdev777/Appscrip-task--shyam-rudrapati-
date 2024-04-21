import { useState } from 'react';
import './style.css';
export const Seltor = (props) => {
  const [show, setShow] = useState(false);
  const sho = () => {
    setShow((e) => !e );
  };
  return (
    <div className='sel'>
      <div onClick={sho}>
        <p>{props.title}</p>
      </div>
      <p>All</p>
      {show && (
        <select className='sel'>
          {props.list.map((val) => {
            return (
              <option key={val.id} value={val.value}>
                {/* <input type='checkbox' value={val.value} /> */}
                {val.name}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
};

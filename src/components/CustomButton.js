import { useState } from 'react';

export default function CustomButton() {
  // const price = 0
  // function setPrice(new_price) {
  //   price = new_price
  // }
  const [price, setPrice] = useState(0);

  // Now we can modify this price with these functions
  function incrementPrice() {
    setPrice(price + 1);
  }
  function decrementPrice() {
    setPrice(price - 1);
  }

  // OR we could do it with one function that takes in an argument
  // function updatePrice(val) {
  //   setPrice(price + val)
  // }

  return (
    <div style={styles_local.inc_container}>
      <button style={styles_local.inc_button} onClick={decrementPrice}>
        -
      </button>
      {price}
      <button style={styles_local.inc_button} onClick={incrementPrice}>
        +
      </button>
    </div>
  );
}

const styles_local = {
  inc_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifySelf: 'center',
    width: '10rem',
    fontSize: '4em',
  },
  inc_button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    color: 'white',
    border: 'none',
    borderRadius: '20%',
    cursor: 'pointer',
    width: '2.5rem',
    height: '2.5rem',
    fontSize: '0.8em',
  },
};

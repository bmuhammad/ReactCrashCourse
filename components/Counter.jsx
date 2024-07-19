import React, { useState } from "react";

function Counter() {
  //const [counter, setCounter] = useState(0);
  const [cart, setCart] = useState({ item: "apple", quantity: 0 });
  // function incrementCounter() {
  //  setCounter(counter + 1);not best practice
  // setCounter((prevCounter) => prevCounter + 1); //use call back but counter would work
  // setCounter((prevCounter) => prevCounter + 1); //main change is use call back function
  // }

  // function decrementCounter() {
  // setCounter(counter - 1);
  // setCounter((prevCounter) => prevCounter - 1);
  // setCounter((prevCounter) => prevCounter - 1);
  // }

  // code for counter
  //<div>
  //  <button onClick={decrementCounter}>-</button>
  // {counter}
  // <button onClick={incrementCounter}>+</button>
  // </div>

  function removeApple() {
    //1. use a callback to get the previous value
    //2. Spread out all the properties of the prev state
    //3. Only change the property that you need to change
    setCart((prevCart) => ({
        ...prevCart,
        quantity: prevCart.quantity - 1
    }));
  }
  function addApple() {
    setCart((prevCart) => ({
      ...prevCart,
      quantity: prevCart.quantity + 1,
    }));
  }

  return (
    <div>
      <button onClick={removeApple}>-</button>
      {cart.quantity}
      {cart.item}
      <button onClick={addApple}>+</button>
    </div>
  );
}

export default Counter;

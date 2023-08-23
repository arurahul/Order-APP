import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {

  const [isCartvisible,setCartVisible]=useState(false);

  const showCartHandler=() => {
    setCartVisible(true);
  }
  const hideCartHandler=() => {
    setCartVisible(false);
  }
  return (
    <Fragment>
      {isCartvisible  &&  <Cart onClose={hideCartHandler}/> }
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;

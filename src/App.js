import React, {useState, Fragment} from "react";
import "./style.css";
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider'

export default function App() {

const [isCartShown, setIsCartShown] = useState(false)

const cartShownHandler = () => {
  setIsCartShown(true)
}

const cartHideHandler = () => {
  setIsCartShown(false)
}

  return (
    <CartProvider>
      {isCartShown && <Cart onClose={cartHideHandler} />}
     <Header onShowCart={cartShownHandler}/>
     <main>
       <Meals />
     </main>
    </CartProvider>
  );
}

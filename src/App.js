import { useState, useEffect } from "react";

import { api } from "./services/api";

import "./styles/index.css";
import { HeadersComponent } from "./components";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    async function loadProduct() {
      try {
        const response = await api.get("products");
        setProductsList(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadProduct();
  }, []);

  const addToCart = (currentProduct) => {
    if (!cartList.some((product) => product.id === currentProduct.id)) {
      setCartList([...cartList, currentProduct]);
    } else {
      alert("Lanche ja consta em seu ao Carrinho");
    }
  };

  const removeToCart = (currentId) => {
    const newCart = cartList.filter((product) => product.id !== currentId);
    setCartList(newCart);
  };

  return (
    <div className="App">
      <HeadersComponent />
      <Cart cartList={cartList} removeToCart={removeToCart} />
      <ProductList productsList={productsList} addToCart={addToCart} />
    </div>
  );
}

export default App;

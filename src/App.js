import { useState, useEffect } from "react";

import { api } from "./services/api";

import "./styles/index.css";
import { HeadersComponent } from "./components";
import ProductList from "./components/Product/ProductList/ProductList";
import Cart from "./components/Cart/Cart";

function App() {
  const localCart = localStorage.getItem("@HamburgerKenzie");
  const [productsList, setProductsList] = useState([]);
  const [cartList, setCartList] = useState(
    localCart ? JSON.parse(localCart) : []
  );

  useEffect(() => {
    async function loadProduct() {
      try {
        const response = await api.get("products");
        setProductsList(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadProduct();
  }, []);

  useEffect(() => {
    localStorage.setItem("@HamburgerKenzie", JSON.stringify(cartList));
  }, [cartList]);

  const addToCart = (currentProduct) => {
    if (!cartList.some((product) => product.id === currentProduct.id)) {
      setCartList([...cartList, currentProduct]);
    } else {
      alert("Lanche ja consta em seu ao Carrinho");
    }
  };

  const removeToCart = (currentId) => {
    if (window.confirm("Deseja excluir esse produto?")) {
      const newCart = cartList.filter((product) => product.id !== currentId);
      setCartList(newCart);
    }
  };

  const removeCartTotal = () => {
    const emptySale = [];
    setCartList(emptySale);
  };

  const soma = cartList.reduce((valorAnterior, valorAtual) => {
    return valorAtual.price
      ? valorAnterior + Number(valorAtual.price)
      : valorAnterior - Number(valorAtual.price);
  }, 0);

  return (
    <div className="App">
      <HeadersComponent />
      <Cart
        cartList={cartList}
        setCartList={setCartList}
        removeToCart={removeToCart}
        soma={soma}
        removeCartTotal={removeCartTotal}
      />
      <ProductList productsList={productsList} addToCart={addToCart} />
    </div>
  );
}

export default App;

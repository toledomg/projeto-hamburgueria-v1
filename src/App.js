import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { api } from "./services/api";

import { HeadersComponent } from "./components";

import Cart from "./components/Cart/Cart";
import ProductList from "./components/Product/ProductList/ProductList";
import { DivApp } from "./components/index";

function App() {
  const localCart = localStorage.getItem("@HamburgerKenzie");
  const [productsList, setProductsList] = useState([]);
  const [cartList, setCartList] = useState(
    localCart ? JSON.parse(localCart) : []
  );
  const [search, setSearch] = useState([]);

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
      toast.success("Lanche adicionado ao seu Carrinho!");
      setCartList([...cartList, currentProduct]);
    } else {
      toast.error("Lanche ja consta em seu ao Carrinho!");
    }
  };

  const removeToCart = (currentId) => {
    if (window.confirm("Deseja excluir esse produto?")) {
      toast.info("Produto excluído com Sucesso");
      const newCart = cartList.filter((product) => product.id !== currentId);
      setCartList(newCart);
    }
  };

  const removeCartTotal = () => {
    const emptySale = [];
    if (window.confirm("Tem certeza que deseja limpar seu Carrinho?")) {
      toast.info("Carrinho limpo com Sucesso");
      setCartList(emptySale);
    }
  };

  const soma = cartList.reduce((valorAnterior, valorAtual) => {
    return valorAtual.price
      ? valorAnterior + Number(valorAtual.price)
      : valorAnterior - Number(valorAtual.price);
  }, 0);

  const searchList = productsList.filter((product) => {
    return search === ""
      ? true
      : product.name.toLowerCase().includes(search.toString().toLowerCase()) ||
          product.category
            .toLowerCase()
            .includes(search.toString().toLowerCase());
  });

  return (
    <DivApp>
      <HeadersComponent
        productsList={productsList}
        search={search}
        setSearch={setSearch}
        searchList={searchList}
      />
      <div>
        <ProductList
          search={search}
          setSearch={setSearch}
          searchList={searchList}
          addToCart={addToCart}
          setCartList={setCartList}
        />
        <Cart
          cartList={cartList}
          setCartList={setCartList}
          removeToCart={removeToCart}
          soma={soma}
          removeCartTotal={removeCartTotal}
        />
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </DivApp>
  );
}

export default App;

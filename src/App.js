// import { useEffect, useState } from "react";
import { ProductPage } from "./components/ProductPage";
import Navbar from "./components/Navbar";
// even though we are not using jsx, it is compiled to react and because of that react has to be imported.

// function component simply function that returns jsx.

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <ProductPage />
    </div>
  );
}
// const [products, setProducts] = useState([]);

// useEffect(() => {
//   async function getData() {
//     const products = await fetchProducts();
//     setProducts(products);
//   }

//   getData();
// }, []);

// const nums = [1, 2, 3];
// const products = [
//   { name: "Skateboard", price: 23, id: "1sad7s89" },
//   { name: "Pc", price: 222, id: "asd87d9" },
//   { name: "Phone", price: 111, id: "sdad7as9" },
// ];
// React.createElemeent("div", null, "Something")

// JSX!

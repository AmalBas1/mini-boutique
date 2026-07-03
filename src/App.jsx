import { useState} from "react";

import ProductList from "./components/ProductList";
import productsData from "./data/products.json"
import CategoryFilter from './components/CategoryFilter';
import Cart from "./components/Cart";


function App() {
  const [products, setProducts] = useState(productsData)
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tous")


  const displayProducts = selectedCategory === "Tous"
  ? products
  : products.filter((p) => p.categorie === selectedCategory)



  const deleteProduct = (id) => {
    setProducts(products.filter(p=> p.id !== id));
  }


  const addToCart = (product) => {
    setCart ([...cart,product]);
  }


  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  };

  return(
    <div className="App">
      <h1>Mini Boutique</h1>
      <CategoryFilter products = {products} setCategory = {setSelectedCategory}/>
      <ProductList
      products={displayProducts}
      onAddToCart={addToCart}
      onDeleteProduct={deleteProduct}/>

      <Cart cart={cart} onRemoveFromCart={removeFromCart}/>

    </div>
  )
}

export default App;
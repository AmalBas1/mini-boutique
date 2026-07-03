import { useState} from "react";

import ProductList from "./components/ProductList";
import productsData from "./data/products.json"
import CategoryFilter from './components/CategoryFilter';
import Cart from "./components/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  const [products, setProducts] = useState(productsData)
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [isCartOpen, setIsCartOpen] = useState(false);


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
      <div>         
        <Header cartCount={cart.length} onOpenCart={() => {console.log("Clic detecté, isCartOpen devient true");setIsCartOpen(true)}} />
      </div>
      <CategoryFilter products = {products} setCategory = {setSelectedCategory}/>
      <ProductList
      products={displayProducts}
      onAddToCart={addToCart}
      onDeleteProduct={deleteProduct}/>

      {isCartOpen && (
        <Cart cart={cart} onRemoveFromCart={removeFromCart} onClose={() => setIsCartOpen(false)} />
      )}

      <div>
        <Footer/>
      </div>

      

    </div>
  )
}

export default App;
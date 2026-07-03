import ProductCard from "./ProductCard";


function ProductList ({products, onAddToCart, onDeleteProduct}){
    return(
         <div className="container">
            <div className="row">
            {products.map((item)=>(
                <ProductCard
                key={item.id}
                product={item}
                onAddToCart={onAddToCart}
                onDeleteProduct={onDeleteProduct}/>
            ))}
              </div>
        </div>
      )
}

export default ProductList;
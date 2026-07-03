import { FaCartShopping } from "react-icons/fa6";

function ProductCard ({product, onAddToCart, onDeleteProduct}){
    return (
        <div className="col-lg-3 col-md-6 mb-4">
            <img src={product.image} alt={product.nom} width={100} />
            <h3>{product.nom}</h3>
            <p>Prix: {product.prix} MAD</p>
            <p>Categorie: {product.categorie}</p>
            <button className="btn btn-primary" onClick={()=> onAddToCart(product)}><FaCartShopping />Ajouter au panier</button>
            <button className="btn btn-danger" onClick={() => onDeleteProduct(product.id)}>Supprimer </button>

        </div>
    )
}

export default ProductCard;
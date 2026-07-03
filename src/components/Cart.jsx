import CartItem  from "./CartItem";


function Cart ({cart , onRemoveFromCart}){

    const total = cart.reduce ((accumulateur, item )=> accumulateur +item.prix, 0)
    


    return(
        <div className="cart">
            <h2>Votre panier</h2>
            {cart.length === 0 ? 
            (<p>
                Votre Panier est vide
            </p>
            ):(
                <ul>
                   {cart.map((item, index)=>(
                    <CartItem key={index} item={item} onRemove={onRemoveFromCart}  />
                   )
                )}
                </ul>
                        ) }
            <h3>Nombre des articles: {cart.length} Total : {total} MAD</h3>
        </div>
    )

}

export default Cart;
import { FaTrash } from "react-icons/fa6";

function CartItem ({item, onRemove}){


    return(
        <li>
            {item.nom} - {item.prix} MAD
            <button onClick={()=>onRemove(item.id)}><FaTrash className="text-danger"/>Supprimer</button>
        </li>
    )
}

export default CartItem;
import "./Header.css";
import { IoCartSharp } from "react-icons/io5";


function Header({ cartCount, onOpenCart }) {
  return (
    <header className="header">
      <div className="logo">MiniBoutique</div>
      <nav>

        <div className="card" onClick={onOpenCart}>
             <IoCartSharp size={26}/>
             <span className="badge-cart">{cartCount}</span>
        </div>
      </nav>
    </header>
  );
}
export default Header;
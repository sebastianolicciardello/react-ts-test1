import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

function CartaForbiceSasso() {
  return (
    <div>
      <Link to="/" className="absolute top-0 left-0 m-4 text-gray-800 text-lg font-semibold flex items-center">
        <IoMdArrowRoundBack className="mr-2" />
        Home
      </Link>
      <h2>Carta, forbice e sasso Component</h2>
      {/* Add the content and functionality for the Carta, forbice e sasso component */}
    </div>
  );
}

export default CartaForbiceSasso;
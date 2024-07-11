// import React from 'react';
// import { useCartGlobally } from '../../context/CartContext';
// import '../cart/cart.css';

// const Cart = () => {
//   const { cart, incrementQuantity, decrementQuantity, removeFromCart } = useCartGlobally();

//   const totalPrice = cart.reduce((acc, item) => acc + (Number(item.salePrice) * item.quantity), 0);

//   return (
//     <div className="cart">
//       <div className="container">
//         <div className="cartContainer">
//           <h3>Shopping Cart</h3>
//           <div className="cartItems">
//             {cart.length > 0 ? (
//               cart.map(item => (
//                 <div className="cartItem" key={item._id}>
//                   <img src={item.images[0]} alt={item.name} className="cartItemImg" />
//                   <div className="cartItemDetails">
//                     <p>{item.name}</p>
//                     <div className="quantityControl">
//                       <button onClick={() => decrementQuantity(item._id)}>-</button>
//                       <span>{item.quantity}</span>
//                       <button onClick={() => incrementQuantity(item._id)}>+</button>
//                     </div>
//                     <p>Rs {Number(item.salePrice).toFixed(2)}</p>
//                   </div>
//                   <button className="removeItem" onClick={() => removeFromCart(item._id)}>x</button>
//                 </div>
//               ))
//             ) : (
//               <p>Your cart is empty</p>
//             )}
//           </div>
//           <div className="summary">
//             <h3>Summary</h3>
//             <div className="summaryDetails">
//               <p>ITEMS {cart.length}</p>
//               <p>Rs {Number(totalPrice.toFixed(2))}</p>
//               <label>SHIPPING</label>
//               <select>
//                 <option>Standard-Delivery - Rs 80.00</option>
//                 <option>Next-Day Delivery - Rs 120.00</option>
//               </select>
//               <button className="checkoutBtn">PROCEED TO CHECKOUT</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;









import React from 'react';
import { useCartGlobally } from '../../context/CartContext';
import { useAuthGlobally } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../cart/cart.css';

const Cart = () => {
    const { cart, incrementQuantity, decrementQuantity, removeFromCart } = useCartGlobally();
    const [auth, setAuth] = useAuthGlobally();
    const navigate = useNavigate();

    const totalPrice = cart.reduce((acc, item) => acc + (Number(item.salePrice) * item.quantity), 0);

    const handleCheckout = () => {
        if (!auth.user) {
            navigate('/login');
        } else {
            navigate('/checkout');
        }
    };

    return (
        <div className="cart">
            <div className="container">
                <div className="cartContainer">
                    <h3>Shopping Cart</h3>
                    <div className="cartItems">
                        {cart.length > 0 ? (
                            cart.map(item => (
                                <div className="cartItem" key={item._id}>
                                    <img src={item.images[0]} alt={item.name} className="cartItemImg" />
                                    <div className="cartItemDetails">
                                        <p>{item.name}</p>
                                        <div className="quantityControl">
                                            <button onClick={() => decrementQuantity(item._id)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => incrementQuantity(item._id)}>+</button>
                                        </div>
                                        <p>Rs {Number(item.salePrice).toFixed(2)}</p>
                                    </div>
                                    <button className="removeItem" onClick={() => removeFromCart(item._id)}>x</button>
                                </div>
                            ))
                        ) : (
                            <p>Your cart is empty</p>
                        )}
                    </div>
                    <div className="summary">
                        <h3>Summary</h3>
                        <div className="summaryDetails">
                            <p>ITEMS {cart.length}</p>
                            <p>Rs {Number(totalPrice.toFixed(2))}</p>
                            <label>SHIPPING</label>
                            <select>
                                <option>Standard-Delivery - Rs 80.00</option>
                                <option>Next-Day Delivery - Rs 120.00</option>
                            </select>
                            <button className="checkoutBtn" onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;

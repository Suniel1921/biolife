// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import '../navbar/navbar.css'

// const Navbar = () => {
//   return (
//     <>
//       <div className="navbarContainer">
//         <div className="container">
//           <div className="navbar">
//             <div className="logo">
//              <Link to={'/'}><img className='logoImg' src="/images/bio_life_Logo.png" alt="Bio Life Logo" /></Link>
//             </div>
//             <ul className='navlinks'>
//               <li><NavLink to="/">Home</NavLink></li>
//               <li><NavLink to="/products">Products</NavLink></li>
//               <li><NavLink to="/contact">Contact</NavLink></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;







import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../navbar/navbar.css';
import { useAuthGlobally } from '../../context/AuthContext';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useCartGlobally } from '../../context/CartContext';

const Navbar = () => {
  const [auth, setAuth] = useAuthGlobally();
 const {cart} = useCartGlobally();

  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth({
      user: null,
      token: null
    });
    localStorage.removeItem('token');
    axios.defaults.headers.common['Authorization'] = null;
    toast.success('Logout Successfully');
    navigate('/login');
  };

  return (
    <div className="navbarContainer">
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <Link to={'/'}><img className='logoImg' src="/images/bio_life_Logo.png" alt="Bio Life Logo" /></Link>
          </div>
          <ul className='navlinks'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/cart">Cart{cart.length}</NavLink></li>
            {
              auth?.user ? (
                <div className="navbar-user">
                  {/* <div className="user-initial">{auth.user.name.charAt(0).toUpperCase()}</div> */}
                  <li onClick={handleLogout}><NavLink to="#">Logout</NavLink></li>
                </div>
              ) : (
                <>
                  <li><NavLink to="/login">Login</NavLink></li>
                  {/* <li><NavLink to="/register">Register</NavLink></li> */}
               
                </>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;




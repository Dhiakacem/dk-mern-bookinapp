import "./navbar.css";
import logo from "../searchitem/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";




const Navbar = () => {

  const navigate = useNavigate();
  // HANDLE LOGOUT EVENT
  const logout = (e) => {
      e.preventDefault();
      console.log('Logout');

      // CLEAR DATA FROM STORAGE
      localStorage.clear();
      sessionStorage.clear();
  }
  const handleclick =  () => {
    navigate("/login")
  }
  
  
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar" >
      <div className="navContainer">
       
      <img src={logo} alt="logog" className="logo"/>
      <Link/>
      
        <div className="Items">
          <button className="navButtonhome">Home</button>
          <button className="navButtonhome">Accomodation</button>
          <button className="navButtonhome">Facilities</button>
          <button className="navButtonhome">Promotion</button>
          
          </div>
          {user ? user.username : (
         <div className="navItems">
          <button className="navButton" onClick={handleclick}>Login</button>
          </div>
         )}
         <div>
          <button className="navButton" onClick={logout}>Logout</button>
          </div>
      </div>
      </div>
    
  )
}

export default Navbar
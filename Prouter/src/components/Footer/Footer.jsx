import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
     <Link to="/new">new</Link>
     <Link to="/">Home</Link>
     <Link to="/about">About</Link>
     <Link to="user/newuser">New user</Link>
    </div>
  )
}

export default Footer;

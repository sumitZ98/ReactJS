import {NavLink} from 'react-router-dom';
function Header(){
    return(
        <div className='header'>
           {/* <Link to="/">Home</Link>
           <Link to="/about">About</Link> */}
           <NavLink 
           className={(e)=> {return e.isActive?"red":""}} to="/">Home</NavLink>
           <NavLink className={(e)=> {return e.isActive?"red":""}} to="/about">About</NavLink>
           <NavLink className={(e)=> {return e.isActive?"red":""}} to="/user/sumit">user</NavLink>
            
        </div>
    );
}
export default Header;
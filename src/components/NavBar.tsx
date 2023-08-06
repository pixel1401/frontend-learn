import { Link, NavLink } from "react-router-dom";


 const  NavBar  =() => {
    return (
        <>
            <nav>
                <Link to={'/about'}>About</Link>
                <Link to={'/'}>Main</Link>
            </nav>
        </>
    )
}


export default NavBar;
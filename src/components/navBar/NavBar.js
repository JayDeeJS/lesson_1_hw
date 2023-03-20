import { NavLink } from 'react-router-dom';
import classes from './navBar.module.css'

const NavBar = () => {
    return (
        <nav className={classes.navBar}>
            <NavLink className="navLink" to={'/'}>Main</NavLink>
            <NavLink className="navLink" to={'/login'}>Login</NavLink>
            <NavLink className="navLink" to={'/about'}>About</NavLink>
            <NavLink className="navLink" to={'/blogs'}>Blogs</NavLink>
            <NavLink className="navLink" to={'/users'}>Users</NavLink>
        </nav>
    )
};

export default NavBar;
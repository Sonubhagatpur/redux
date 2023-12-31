import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div>
                <ul className='ul-link'>
                    <li><Link to='/'>Products</Link></li>
                    <li><Link to='/add'>Add Products</Link></li>
                    <li><Link to='/update'>Update Products</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>
                    <li><Link to='/user'>User</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;
import {IoCartOutline} from "react-icons/io5";
import {BiHeart} from "react-icons/bi";
import {MdSearch} from "react-icons/md";
import {NavLink} from "react-router-dom";
import {useApp} from "../context/AppContext.tsx";

const Header = () => {
    const {isAuthenticated, user, logout} = useApp();

    return (
        <div className="navbar bg-base-100 py-4 px-3 md:px-6 lg:px-10 xl:px-12">
            <NavLink to='/' className="navbar-start">
                <img src='/logo.png' alt='logo' className='w-32 h-16 lg:w-36 lg:h-16'/>
            </NavLink>
            <div className="navbar-center hidden lg:flex">
                <label className="input input-bordered flex items-center gap-2 w-96">
                    <input type="text" className="grow" placeholder="Search"/>
                    <MdSearch size={20}/>
                </label>
            </div>
            <div className="navbar-end gap-x-2">
                <NavLink to='/products' className='btn btn-sm btn-primary hidden lg:flex'>Explore</NavLink>
                {isAuthenticated ?
                    <>
                        <NavLink to='/wishlist' className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <BiHeart size={22}/>
                                {user?.wishlist.length > 0 ?
                                    <span className="badge badge-sm badge-secondary indicator-item">{user?.wishlist.length}</span> : ''
                                }
                            </div>
                        </NavLink>
                        <NavLink to='/cart' className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <IoCartOutline size={24}/>
                                {user?.cart.length > 0 ?
                                    <span className="badge badge-sm badge-secondary indicator-item">{user?.cart.length}</span> : ''
                                }
                            </div>
                        </NavLink>
                        <div className="dropdown dropdown-end ml-2">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        {user?.username}
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li onClick={logout}><a>Logout</a></li>
                            </ul>
                        </div>
                    </>
                    :
                    <>
                        <NavLink to='/signin' className="btn btn-sm btn-neutral btn-outline">
                            Sign in
                        </NavLink>
                        <NavLink to='/signup' className="btn btn-sm btn-neutral">
                            Create Account
                        </NavLink>
                    </>
                }


            </div>
        </div>
    )
}

export default Header;

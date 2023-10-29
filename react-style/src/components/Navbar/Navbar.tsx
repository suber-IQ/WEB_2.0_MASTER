import { useState } from 'react';
import styles from './Navbar.module.css';
import { BiLogoVimeo, BiSolidUser } from 'react-icons/bi';
import { AiFillHome,AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';
import { FaBlogger } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
      const [menuToggle, setMenuToggle] = useState(false);

      const toggleMenu = () => {
            setMenuToggle(!menuToggle);            
      }
      return (
            <div className={styles.header}>
                  <nav className={styles.nav}>
                        <div className={styles.nav_left}>
                              <NavLink to={"/"}>
                                    <BiLogoVimeo /> 
                              </NavLink>
                        </div>
                        <div className={styles.nav_right}>
                                <ul>
                                    <li>
                                       <NavLink to={"/"}>
                                           <AiFillHome />
                                       </NavLink>
                                    </li>
                                    <li>
                                       <NavLink to={"/search"}>
                                           <AiOutlineSearch />
                                       </NavLink>
                                    </li>
                                    <li>
                                       <NavLink to={"/blog"}>
                                           <FaBlogger />
                                       </NavLink>
                                    </li>
                                    <li>
                                       <NavLink to={"/account"}>
                                           <BiSolidUser />
                                       </NavLink>
                                    </li>
                                    <li>
                                       <NavLink to={"/cart"}>
                                           <BsFillCartFill />
                                       </NavLink>
                                    </li>
                                    
                              </ul>
                            {
                              !menuToggle ? <>
                                <span onClick={toggleMenu} className={styles.menu}>
                                  <RxCross1 />
                             </span>
                              </> : <>
                              <span onClick={toggleMenu} className={styles.menu}>
                                  <AiOutlineMenu />
                             </span>
                              </>
                            }
                        </div>
                  </nav>
               {
                  !menuToggle && <>
                     <div className={styles.dropmenu}>
                     <ul>
                                    <li>
                                       <NavLink to={"/"}>
                                           <AiFillHome /> Home
                                       </NavLink>
                                    </li>
                                    <li>
                                       <NavLink to={"/search"}>
                                           <AiOutlineSearch /> Search
                                       </NavLink>
                                    </li>
                                    <li>
                                       <NavLink to={"/blog"}>
                                           <FaBlogger /> Blog
                                       </NavLink>
                                    </li>
                                    <li>
                                       <NavLink to={"/account"}>
                                           <BiSolidUser /> Account
                                       </NavLink>
                                    </li>
                                    <li>
                                       <NavLink to={"/cart"}>
                                           <BsFillCartFill /> Cart
                                       </NavLink>
                                    </li>
                                    
                              </ul>
                     </div>
                  </>
               }
            </div>
      )
}

export default Navbar
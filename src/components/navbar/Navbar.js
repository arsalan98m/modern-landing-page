import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './Navbar.css';

const Menu = () => {
  return (
    <>
      <p>
        <a href='#home'>Home</a>
      </p>

      <p>
        <a href='#whatgpt3'>What is GPT3?</a>
      </p>

      <p>
        <a href='#possibility'>OpenAI</a>
      </p>

      <p>
        <a href='#features'>Case Studies</a>
      </p>

      <p>
        <a href='#blog'>Library</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='navbar'>
      <div className='section-center navbar__center'>
        <div className='navbar__links'>
          {/* Logo */}
          <div className='navbar__linksLogo'>
            <img src={logo} alt='gpt3 logo' />
          </div>

          {/* Links */}
          <div className='navbar__linksContainer'>
            <Menu />
          </div>

          {/* Signin and signup Button */}
          <div className='navbar__signIn'>
            <p>Sign in</p>
            <button>Sign up</button>
          </div>

          {/* Mobile Menu */}
          <div className='navbar__menu'>
            {toggleMenu ? (
              <RiCloseLine
                color='#fff'
                size={27}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                color='#fff'
                size={27}
                onClick={() => setToggleMenu(true)}
              />
            )}

            {toggleMenu && (
              <div className='navbar__menuContainer scale-up-center'>
                <div className='navbar__menuContainerLinks'>
                  <Menu />
                </div>

                <div className='navbar__menuSignIn'>
                  <p>Sign in</p>
                  <button>Sign up</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

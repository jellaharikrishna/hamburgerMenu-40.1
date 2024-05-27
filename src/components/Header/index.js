import {Link} from 'react-router-dom'

import Popup from 'reactjs-popup'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const overlayStyles = {
  backgroundColor: '#ffff',
}

const Header = () => (
  <div className="header-container">
    <Link to="/" className="popup-link">
      <img
        className="header-website-logo"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>

    <Popup
      modal
      trigger={
        <button
          data-testid="hamburgerIconButton"
          type="button"
          className="header-hamburger-icon-btn"
        >
          <GiHamburgerMenu className="header-hamburger-icon" />
          <p className="none">.</p>
        </button>
      }
      overlayStyle={overlayStyles}
    >
      {close => (
        <>
          <Link to="/" onClick={() => close()}>
            <div className="popup-close-card">
              <button
                data-testid="closeButton"
                type="button"
                className="popup-close-icon-btn"
              >
                <IoMdClose className="popup-close-icon" />
                <p className="none">.</p>
              </button>
            </div>
          </Link>

          <ul className="popup-container">
            <Link to="/" className="popup-link" onClick={() => close()}>
              <li className="popup-card">
                <AiFillHome className="popup-icon" />
                <h1 className="popup-heading">Home</h1>
              </li>
            </Link>

            <Link to="/about" className="popup-link" onClick={() => close()}>
              <li className="popup-card">
                <BsInfoCircleFill className="popup-icon" />
                <h1 className="popup-heading">About</h1>
              </li>
            </Link>
          </ul>
        </>
      )}
    </Popup>
  </div>
)

export default Header

import {withRouter, Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import './index.css'

const websiteLogo = 'https://assets.ccbp.in/frontend/react-js/logo-img.png'

const Header = props => {
  const onClickLogOut = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="header-container">
      <ul className="list-container">
        <li className="logo-container">
          <Link to="/" className="nav-link">
            <img className="logo" src={websiteLogo} alt="website logo" />
          </Link>
        </li>
        <li className="nav-links-container">
          <Link to="/" className="nav-link">
            <h1 className="nav-to-name">Home</h1>
            <AiFillHome className="nav-icon" />
          </Link>
          <Link to="/jobs" className="nav-link">
            <h1 className="nav-to-name">Jobs</h1>
          </Link>
        </li>
        <li>
          <FiLogOut className="nav-icon" onClick={onClickLogOut} />
          <button
            className="logout-button"
            type="button"
            onClick={onClickLogOut}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Header)

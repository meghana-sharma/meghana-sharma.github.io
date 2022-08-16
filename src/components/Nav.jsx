import { Link } from 'react-router-dom'
import CA from '../images/CA.svg'

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img src={CA}></img>
        <h1>MDCCD</h1>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/general">General</Link>
        </li>
        <li>
          <Link to="/programs">Programs</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <button type="button">French</button>
        </li>
      </ul>
    </div>
  )
}

export default Nav

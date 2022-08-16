import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FaInstagram />
        <FaTwitter />
        <FaLinkedinIn />
        <FaFacebookF />
      </div>
      <p>&copy; 2022 canada.gc.ca</p>
    </div>
  )
}

export default Footer

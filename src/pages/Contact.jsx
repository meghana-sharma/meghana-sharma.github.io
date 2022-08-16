import ContactInfoItem from '../components/ContactInfoItem'
import { FaAddressBook } from 'react-icons/fa'

export default function Contact() {
  return (
    <div className="contact">
      <div className="container"></div>
      <h1>Get in Touch.</h1>
      <div className="contactSection-wrapper">
        <div className="left">
          <ContactInfoItem />
        </div>
        <div className="right">Form</div>
        <form>
          <div className="form-group">
            <label htmlFor="name">
              Your name
              <input type="text" id="name" name="name" value="" />
            </label>
            <label htmlFor="email">
              <FaAddressBook />
              Email
              <input type="text" id="email" name="email" value="" />
            </label>
            <label htmlFor="name">
              Your name
              <input type="text" id="name" name="name" value="" />
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}

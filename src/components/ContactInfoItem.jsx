import { FaPhoneAlt, FaLocationArrow } from 'react-icons/fa'

export default function ContactInfoItem() {
  return (
    <div>
      <div className="icon">
        <FaLocationArrow />
      </div>
      <div className="info">
        <p>Ottawa, Canada</p>
      </div>
    </div>
  )
}

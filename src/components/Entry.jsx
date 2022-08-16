import Programs from '../pages/Programs'

const Entry = () => {
  return (
    <div className="first">
      <div className="blurb">
        <img
          src={require('../images/welcome2.jpg')}
          className="welcomeimg"
          alt="welcome"
        ></img>
        <h2 className="greeting">MDCCD Homepage.</h2>
        <h3 className="subgreeting">
          You have landed on my page. More information will follow.
        </h3>
      </div>
      <div className="programsentry">
        <Programs />
      </div>
    </div>
  )
}

export default Entry

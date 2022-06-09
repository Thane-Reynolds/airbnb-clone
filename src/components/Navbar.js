import logo from '../images/airbnblogo.png'

export function Navbar(){
  return(
    <nav className="navbar">
      <div className="navbar--logo-div">
        <img src= { logo } alt="airbnb brand" />
      </div>
    </nav>
  )
}
import star from '../images/star.png'
import person from '../images/katie-zaferes.png'

export function Card(props){
  return(
    <div className="card">
      <div className="card--image-div">
        <span className="card--context">SOLD OUT</span>
        <img src= {props.img} alt="Katie Zaferes" className="card--focusimage" />
      </div>
      <div className="card--textcontent">
        <div className="card--ratingandlocation">
          <img src= { star } alt="A star" className="card--star" />
          <span className="card--ratingtext">{props.rating}</span>
          <span className="card--people-location">({props.reviewCount}) &#183; {props.country} </span>
        </div>
        <p className="card--eventdescription">{props.title}</p>
        <p className="card--cost"><span className="card--from">From ${props.price}</span> / person</p>
      </div>
    </div>
  )
}
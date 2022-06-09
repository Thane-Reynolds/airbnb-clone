export function Card(props){
  return(
    <div className="card">
      <div className="card--image-div">
        <span className="card--context">{props.context}</span>
        <img src= {`/images/${props.img}`} alt="Katie Zaferes" className="card--focusimage" />
      </div>
      <div className="card--textcontent">
        <div className="card--ratingandlocation">
          <img src= "/images/star.png" alt="A star" className="card--star" />
          <span className="card--ratingtext">{props.rating}</span>
          <span className="card--people-location">({props.reviewCount}) &#183; {props.location} </span>
        </div>
        <p className="card--eventdescription">{props.title}</p>
        <p className="card--cost"><span className="card--from">From ${props.price}</span> / person</p>
      </div>
    </div>
  )
}
export function Card(props){
  let badgeText;
  if (props.openSpots === 0){
    badgeText = "SOLD OUT"
  } else if (props.location === "Online"){
    badgeText = "ONLINE"
  }
  return(
    <div className="card">
        {badgeText && <span className="card--context">{badgeText}</span>}
      <div className="card--image-div">
        <img src= {`/images/${props.coverImg}`} alt="Katie Zaferes" className="card--focusimage" />
      </div>
      <div className="card--textcontent">
        <div className="card--ratingandlocation">
          <img src= "/images/star.png" alt="A star" className="card--star" />
          <span className="card--ratingtext">{props.stats.rating}</span>
          <span className="card--people-location">({props.stats.reviewCount}) &#183; {props.location} </span>
        </div>
        <p className="card--eventdescription">{props.title}</p>
        <p className="card--cost"><span className="card--from">From ${props.price}</span> / person</p>
      </div>
    </div>
  )
}
import grid from '../images/photo-grid.png'

export function Hero(){
  return(
    <section className="hero">
      <div className="hero--img-div">
        <img className="hero--grid-img" src= { grid } alt="cool events" />
      </div>
      <div className="hero--text">
        <h1 className="hero--title">Online Experiences</h1>
        <p className="hero--content">Join unique interactive activities led by one-of-a-kind hosts- all without leaving home.</p>
      </div>
    </section>
  )
}